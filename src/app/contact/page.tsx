import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex items-center gap-[100px]">
      <div className="flex-1">
        <Image
          src={'/contact.png'}
          alt="contact"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <form
          action=""
          className="flex flex-col gap-[20px]"
        >
          <input
            type="text"
            className="p-5 rounded-[20px] border-none outline-none bg-bg-soft-color text-white"
            placeholder="Name and surname"
          />
          <input
            type="text"
            className="p-5 rounded-[20px] border-none outline-none bg-bg-soft-color text-white"
            placeholder="Email address"
          />
          <input
            type="text"
            className="p-5 rounded-[20px] border-none outline-none bg-bg-soft-color text-white"
            placeholder="Phone number (Optional)"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="p-5 rounded-[20px] border-none outline-none bg-bg-soft-color text-white"
            placeholder="Message"
          ></textarea>
          <button
            className="w-auto bg-bg-btn p-3 rounded-[20px]"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
