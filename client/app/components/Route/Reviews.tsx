import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={400}
        height={400}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br />
          </h3>
          <br />
          <p className={styles.label}>
          Hostel management automation is essential for streamlining and enhancing the efficiency of hostel operations. Manual management of hostels can be cumbersome and error-prone, leading to inefficiencies and potential issues. Automation can help in several ways, such as simplifying the booking process, managing room allocation more effectively, tracking attendance and meal preferences accurately, and improving communication between hostel administration and residents. Additionally, automation can enable better monitoring of resources, such as food and utilities, leading to cost savings and improved resource utilization. Overall, hostel management automation is necessary to improve the overall experience for both hostel administrators and residents, making operations more efficient, transparent, and convenient.
          </p>
        </div>
        <br />
        <br />
       </div>
  </div>
  );
};

export default Reviews;
