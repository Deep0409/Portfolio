import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'deepanshu.me',
    href: 'https://localhost:3001',
  },
  {
    social: 'email',
    link: 'pariyanideepanshu@gmail.com',
    href: 'mailto:pariyanideepanshu@gmail.com',
  },
  {
    social: 'github',
    link: 'Deep0409',
    href: 'https://github.com/Deep0409',
  },
  {
    social: 'linkedin',
    link: 'deepanshu1104',
    href: 'https://www.linkedin.com/in/deepanshu1104',
  },
  
  {
    social: 'instagram',
    link: 'deep_0411',
    href: 'https://www.instagram.com/deep_0411?igsh=OTlyNDR0bXI3ejNp',
  },
 
  {
    social: 'telegram',
    link: 'deep04049',
    href: 'https://t.me/deep0409',
  },

 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
