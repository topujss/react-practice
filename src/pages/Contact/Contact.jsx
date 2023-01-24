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
  });

  // On input change
  function handleInput(e) {
    const This = e.target;

    setInput({
      ...input,
      [This.name]: This.value,
    });
  }

  // alert state management
  const [alert, setAlert] = useState({
    status: false,
    msg: '',
    type: 'bg-red-100 border-red-400 text-red-700',
  });

  // On form submit event
  const handleInputSubmit = (e) => {
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

  return (
    <>
      <section>
        <Header />
        <Title
          title="our Contact page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />

        <div className="main-form">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div className="w-full rounded-lg shadow-lg max-w-lg">
              <div className="p-6 space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">Create an account</h1>
                <form className="space-y-4" onSubmit={handleInputSubmit}>
                  {/* if alert true show else hide alert */}
                  {alert.status && <Alert msg={alert.msg} type={alert.type} hide={setAlert} />}
                  <div>
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={input.name}
                      name="name"
                      onChange={handleInput}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={handleInput}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">
                      Phone num
                    </label>
                    <input
                      type="text"
                      name="cell"
                      value={input.cell}
                      onChange={handleInput}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-none"
                      placeholder="248-385-8242"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 font-medium rounded-lg px-5 py-2.5 text-center"
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
