import React, { useEffect, useState } from "react";
import insructors from "../../assets/Instructors/instructors-2.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import SingleInstructor from "./SingleInstructor/SingleInstructor";
import CommonPart from "../../Shared/CommonPart/CommonPart";
import commonImage from "../../assets/menu/menu-9.jpg"


const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  // coverImage Info
  const title = " Mentor Empowering Students' Artistic Growth";
  const text =
    "Dance instructors are passionate, skilled professionals who guide and inspire students in their dance journey. ";
    const className = "mb-5 text-orange-400 text-lg";
    const description = `Join us and discover the joy of dance in a supportive and
    creative environment. Our experienced instructors will guide
    you every step of the way. `
    const commonTitle = "Your Dreams"


  //
  useEffect(() => {
    fetch(`https://dance-school-server-senior9.vercel.app/classCollection`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <CoverImage
      className={className}
        img={insructors}
        title={title}
        text={text}
        input={"Lets Explore"}
      ></CoverImage>
      <div className="mt-5">
        <div>
        <CommonPart image={commonImage} title={commonTitle} description={description} ></CommonPart>
        </div>
      </div>
      <div className="bg-slate-300 rounded-xl p-16">
        <div className="container mx-auto lg:grid   grid-cols-3 gap-9">
          {instructors.map((insructors) => (
            <SingleInstructor
              key={insructors.id}
              insructors={insructors}
            ></SingleInstructor>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Instructors;
