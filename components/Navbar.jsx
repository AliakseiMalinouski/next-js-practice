import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
  ]; 

const Navbar = () => {

    const {pathname} = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src='/vercel.svg' width={60} alt='Logo' height={60}/>
            </div>
            <div className={styles.links}>
                {
                    navigation.map(e => <Link href={e.path} key={e.id}>
                        <span style={{color: e.path === pathname ? 'red' : 'white'}}>{e.title}</span>
                    </Link>)
                }
            </div>
        </nav>
    )
}

export default Navbar;