import styles from '../../styles/ContactUs/GoogleMap.module.css';

export default function GoogleMap() {
  return (
    <>
    <section className={styles.GoogleMap + ' default-pb default-pt position-relative'}>
        <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03277779947!2d54.897821396168844!3d25.075658379360775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1687260560599!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    </>
  );
}