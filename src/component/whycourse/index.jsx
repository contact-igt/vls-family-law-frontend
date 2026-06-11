import Button from "@/common/Button";
import styles from "./styles.module.css";
import Title from "@/common/Title";

const WhyCourse = ({ scrollToContactForm }) => {
  return (
    <section className={styles.whycouresec}>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <div className={styles.course}>
              <Title title1={"Why This"} spantitle={"MasterClass ?"} />

              <p className="my-5">
                {" "}
                Law school gives you the theory. VLS gives you the practical
                clarity. Whether you are a junior advocate, law graduate, or
                practicing lawyer looking to enter family law, this session
                helps you understand how family matters are handled in real
                legal practice — from first consultation to drafting, filing,
                mediation, court proceedings, and client guidance.
              </p>

              <Button
                name={"Learn More"}
                scrollToContactForm={scrollToContactForm}
              />
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className={styles.courseimg}>
              <img src={"/assets/home/whycourse.jpeg"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCourse;
