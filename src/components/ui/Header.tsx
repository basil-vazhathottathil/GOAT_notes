import Link from 'next/link'
import Image from 'next/image'
import { shadow } from './utils'
import { Button } from './button';
import DarkModeToogle from './DarkModeToogle'
import LogoutButton from '../LogoutButton';

const Header = () => {
    const user=1;

  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
    style={
        {
            boxShadow :shadow
        }
    }>
        <Link href='/' className='flex items-end gap-2'>
            <Image src='/goat.png' alt='Goat Logo' width={50} height={50} priority className='rounded-full' />
            <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>
            GOAT <span>Notes</span>
        </h1>
        </Link>

        <div className='flex gap-4'>
            {
                user ? (
                    // <Button onClick={() => {}}>LogOut</Button>
                    <LogoutButton/>
                ) : (
                    <>
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild className='hidden sm:block'>
                            <Link href="/signup">Signup</Link>
                        </Button>
                    </>
                )
            }
            <DarkModeToogle/>
        </div>
    </header>
  )
}

export default Header