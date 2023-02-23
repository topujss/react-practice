import { useState } from 'react';
import swal from 'sweetalert';
import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

export default function Contact() {
  // state management for form fields
  const [input, setInput] = useState({
    name: '',
    email: '',
    cell: '',
    age: '',
    color: '',
    gender: '',
    language: '',
    dept: '',
  });

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;

    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  // On input change
  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // alert state management
  const [alert, setAlert] = useState({
    status: false,
    msg: '',
    type: 'bg-red-100 border-red-400 text-red-700',
  });

  // On form submit event
  const handleChangeSubmit = (e) => {
    e.preventDefault();

    const { name, email, cell } = input;

    if (!name || !email || !cell) {
      setAlert({
        status: true,
        msg: 'Please Fill all fields',
        type: 'bg-red-100 border-red-400 text-red-700',
      });

      swal('Please Fill all fields', 'Please try again', 'error', {
        button: 'Submit',
      });
    } else {
      setInput({
        name: '',
        email: '',
        cell: '',
      });

      setAlert({
        status: true,
        msg: 'Registration successful',
        type: 'bg-green-100 border-green-400 text-green-700',
      });

      // show success alert with sweetAlert
      swal('Registration successful', 'Thank you for registering', 'success', {
        button: 'Have a nice day',
      });
    }
  };

  const defaultLabelStyle = `text-sky-700 font-bold mb-2 block`;

  return (
    <>
      <section>
        <Header />
        <Title
          title="our Contact page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />

        <div className="main-form ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div className="w-full rounded-lg shadow-lg max-w-lg">
              <div className="p-6 space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">Create an account</h1>
                <form className="space-y-4" onSubmit={handleChangeSubmit}>
                  {/* if alert true show else hide alert */}
                  {alert.status && <Alert msg={alert.msg} type={alert.type} hide={setAlert} />}
                  <div>
                    <label htmlFor="" className={defaultLabelStyle}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className={defaultLabelStyle}>
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className={defaultLabelStyle}>
                      Phone num
                    </label>
                    <input
                      type="text"
                      name="cell"
                      value={input.cell}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-none"
                      placeholder="248-385-8242"
                    />
                  </div>
                  {/* input range tag */}
                  <div className="block">
                    <label htmlFor="" className={defaultLabelStyle}>
                      Age
                    </label>
                    <input
                      name="age"
                      value={input.age}
                      onChange={handleChange}
                      className="block"
                      type="range"
                      step={1}
                      min="14"
                      max="70"
                    />{' '}
                    <span className="text-gray-500">{input.age}</span>
                  </div>
                  {/* input color tag */}
                  <div className="block">
                    <label htmlFor="" className={defaultLabelStyle}>
                      Color
                    </label>
                    <input
                      name="color"
                      value={input.color}
                      onChange={handleChange}
                      className="block"
                      type="color"
                      draggable={false}
                      id=""
                    />
                    <span className="text-gray-500">{input.color}</span>
                  </div>

                  {/* input radio tag */}
                  <div>
                    <label htmlFor="" className={defaultLabelStyle}>
                      Gender
                    </label>
                    <label htmlFor="link" className="block">
                      <input type="radio" name="gender" value="male" onChange={handleChange} id="link" /> Male
                    </label>
                    <label htmlFor="" className="block">
                      <input type="radio" name="gender" value="female" onChange={handleChange} id="" /> female
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="gender" value="others" onChange={handleChange} id="" /> Others
                    </label>
                  </div>
                  {/* select option tag */}
                  <div className="block mb-2">
                    <label htmlFor="" className={defaultLabelStyle}>
                      Languages
                    </label>
                    <select
                      name="language"
                      value={input.language}
                      onChange={handleChange}
                      className="capitalize focus:outline-none"
                      id=""
                    >
                      <option value="select">-Select-</option>
                      <option value="javascript">javascript</option>
                      <option value="python">python</option>
                      <option value="java">java</option>
                      <option value="csharp">cSharp</option>
                      <option value="go">go</option>
                      <option value="rust">rust</option>
                    </select>
                  </div>
                  {/* input checkbox tag */}
                  <div className="block mb-2">
                    <label htmlFor="" className={defaultLabelStyle}>
                      Department
                    </label>
                    <label htmlFor="">
                      <input
                        name="dept"
                        checked={checkedItems['javascript stack']}
                        onChange={handleCheckbox}
                        type="checkbox"
                      />{' '}
                      javascript stack
                    </label>
                    <label htmlFor="" className="mx-4 block">
                      <input
                        name="dept2"
                        checked={checkedItems['django stack']}
                        onChange={handleCheckbox}
                        type="checkbox"
                      />{' '}
                      django stack
                    </label>
                    <label htmlFor="">
                      <input
                        name="dept3"
                        checked={checkedItems['java stack']}
                        onChange={handleCheckbox}
                        type="checkbox"
                      />
                      java stack
                    </label>
                    <label htmlFor="" className="mx-4 block">
                      <input
                        name="dept4"
                        checked={checkedItems['go stack']}
                        onChange={handleCheckbox}
                        type="checkbox"
                      />{' '}
                      go stack
                    </label>
                    <label htmlFor="">
                      <input
                        name="dept5"
                        checked={checkedItems['php stack']}
                        onChange={handleCheckbox}
                        type="checkbox"
                      />{' '}
                      php stack
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={`w-full text-white bg-blue-600 font-medium rounded-lg px-5 py-2.5 text-center`}
                  >
                    Create an account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
