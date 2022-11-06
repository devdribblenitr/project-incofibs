import Image from "next/image";

const Speakers = ({ name, img, designation1, designation2 }) => {
  return (
    <div class="speakers_card w-full rounded-lg border  mx-auto my-6 ">
      <div class="flex flex-col items-center mt-0  comm:py-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.04),_10px_10px_30px_4px_rgba(45,78,255,0.07)]">
        {/* <Image
          class=" shadow-lg object:cover"
          src={img}
          alt="Bonnie image"
          width="220px"
          height="220px"
        /> */}
        <h5 class="my-1 text-xl font-bold text-gray-900 dark:text-white">
          {name}
        </h5>
        <span class="text-sm py-4 px-8 text-center text-gray-500 dark:text-gray-200 font-bold">
          {designation1}
        </span>
        <span class="text-sm px-8 text-center text-gray-500 dark:text-gray-200 font-bold">
          {designation2}
        </span>
        {/* <div class="md:flex mt-4 space-x-4 md:mt-6 pb-6">
          <a
            href={`mailto:${email}`}
            class="inline-flex items-center py-2 sm:px-4 px-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <EmailIcon style={{ color: "white" }} />{" "}
          </a>

          <a
            href={`tel:${contact}`}
            class="inline-flex items-center py-2 sm:px-4 px-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {" "}
            <PhoneIcon style={{ color: "white" }} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Speakers;
