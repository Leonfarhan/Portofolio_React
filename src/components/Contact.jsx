const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#A9907E] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/dda1e4d1-836b-4948-b06c-a48731fdc42c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-black">
            Contact
          </p>
        </div>
        <input
          className="bg-white p-2 rounded-md pl-4"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white rounded-md pl-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2 rounded-md pl-4"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-black hover:border-black px-4 py-3 my-8 mx-auto flex items-center">
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;