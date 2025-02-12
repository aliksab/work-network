import { MessageSquare, Phone, Settings, Sun, Users2 } from 'lucide-react'
import Image from 'next/image'
import styles from './Sidebar.module.scss'
import Link from 'next/link'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Image
                src="/crossplane-icon.svg"
                alt=""
                width={50}
                height={50}
                priority
            />
            <div>
                <Link href={'/friends'}>
                    <Users2 size={30} />
                </Link>
                <Link href={'/call'}>
                    <Phone size={30} />
                </Link>
                <Link href={'/chats'}>
                    <MessageSquare size={30} />
                </Link>
                <Link href={'/settings'}>
                    <Settings size={30} />
                </Link>
            </div>
            <Sun size={30} />
        </aside>
    )
}
