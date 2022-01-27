import '../styles/components/Footer.scss';

const Footer = (props) => {
  return (
    <footer class='footer'>
      <small class='footer__copy'>&copy; 2022 Laura Carbajales</small>
      <section class='footer__rrss'>
        <h3 class='footer__rrss--title'>See more about me on:</h3>
        <a href='https://github.com/Laura-Carbajales' class='footer__rrss--link'>
          <i class='icon fab fa-github-square'></i>
        </a>
        <a href='https://www.linkedin.com/in/lauracarbajales/' class='footer__rrss--link'>
          <i class='icon fab fa-linkedin'></i>
        </a>
        <a href='https://twitter.com/Lau_1505' class='footer__rrss--link'>
          <i class='icon fab fa-twitter-square'></i>
        </a>
      </section>
    </footer>
  );
};
export default Footer;
