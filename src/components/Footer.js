import classes from "./Footer.module.css";
import viber from "../img-app/viber.png";
import telegram from "../img-app/telegram.png";
import whatsapp from "../img-app/whatsapp.png";

export const Footer = () =>{
  const CLASSES = {
      BLOCK: classes.block_1136,
      FOOTER: classes.footer,
      FOOTER_CONTENT: classes.footer_content,
      FOOTER_DEVELOPER: classes.footer_developer,
      FOOTER_CONTACTS: classes.footer_contacts,
      FOOTER_MESSENGERS: classes.footer_messengers
  }

  return(
    <div className = {CLASSES.FOOTER}>
        <div className = {`${CLASSES.BLOCK} ${CLASSES.FOOTER_CONTENT}`}>
            <div className = {CLASSES.FOOTER_DEVELOPER}>
                <span>Developed by</span>
                <a href = {"https://pavelhack.github.io/Portfolio.github.io/"}>Pavel Melnikov</a>
            </div>
            <div className = {CLASSES.FOOTER_CONTACTS}>
                <span>My contacts</span>
                <div className = {CLASSES.FOOTER_MESSENGERS}>
                    <img src = {viber} alt = "viber" style= {{maxHeight: "20px"}}></img>
                    <img src = {telegram} alt="telegram" style= {{maxHeight: "20px"}}></img>
                    <img src = {whatsapp} alt = "whatsapp" style= {{maxHeight: "20px"}}></img>
                </div>
            </div>
        </div>
    </div>       
  )
}