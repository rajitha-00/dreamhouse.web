"use client";
import { PageTitle, Paragraph } from "@/components";
import { ContactForm } from "@/components/Forms/ContactForm/ContactForm";
import { Fade } from "react-awesome-reveal";

const Contact: React.FC = () => {
  return (
    <>
      <section className="min-h-[40vh] mt-20 px-5 mx-auto max-w-[1500px] lg:px-0 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-start justify-between h-auto">
          <Fade triggerOnce direction="left">
            <div className="col bg-white bg-opacity-[0.1] rounded-[6px] border border-white border-opacity-[0.1] backdrop-filter backdrop-blur-[10px] pt-10">
              <Fade triggerOnce direction="up">
                {" "}
                <PageTitle start title="Our team is ready to help!" />
              </Fade>
              <Fade triggerOnce direction="up">
                {" "}
                <div className="mt-5">
                  <Paragraph start paragraph="You can call or whatsapp" />
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade triggerOnce direction="right">
            <div className="col">
              <Fade triggerOnce direction="up">
                {" "}
                <ContactForm />
              </Fade>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};
export default Contact;
