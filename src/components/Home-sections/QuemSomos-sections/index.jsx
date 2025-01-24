import Title from "./TitleQS"
import ImgContainer from "./ImgContainerQS"
import temporaryImg from "./../../../assets/images/home/Em-evento.jpeg"
import TextContainer from "./TextContainerQS"
import styles from "./app.module.css"

export default function QuemSomos(){
    return(
        <>
        <div className={styles.customshapedividerbottom1734053474}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
          </svg>
      </div>
      <div className={styles.QuemSomosWrapper}>
           <Title />
           <div className={styles.QuemSomosContent}>
              <ImgContainer src={temporaryImg} alt="aaaaaaa"/>
              <TextContainer />
           </div>
      </div>
      <div className = {styles.customshapedividertop1734203090}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill2} ></path>
        </svg>
      </div>
        </>
    )
}