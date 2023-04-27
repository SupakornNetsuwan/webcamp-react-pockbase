import { useState, useEffect } from "react";
import CamperDisplay from "./CamperDisplay";
import pb from "./connector";

const App = () => {
  // {isLoading , isError, data} = useGetCampers()
  // customHooks

  const [campers, setCampers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    grade: "GRADE4",
    birthdate: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const records = await pb.collection("campers").getFullList({
        sort: "-created",
      });

      return records;
    };

    fetch().then((records) => {
      setCampers(records);
      setIsLoading(false);
    });
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.firstname || !form.lastname || !form.birthdate) {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return;
    }

    const record = await pb.collection("campers").create(form);
    setCampers([record, ...campers]);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column", width: "10em" }}
      >
        <label htmlFor="firstname">Firstname</label>
        <input
          onChange={changeHandler}
          name="firstname"
          value={form.firstname}
          type="text"
          id="firstname"
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          onChange={changeHandler}
          name="lastname"
          value={form.lastname}
          type="text"
          id="lastname"
        />
        <label htmlFor="grade">Grade</label>
        <select
          onChange={changeHandler}
          value={form.grade}
          name="grade"
          id="grade"
        >
          <option value="GRADE4">ม.4</option>
          <option value="GRADE5">ม.5</option>
          <option value="GRADE6">ม.6</option>
        </select>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          onChange={changeHandler}
          name="birthdate"
          value={form.birthdate}
          type="date"
          id="birthdate"
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading === true && <p>Loading... 🫠</p>}
      {isLoading === false && <CamperDisplay campers={campers} />}
    </div>
  );
};

export default App;
