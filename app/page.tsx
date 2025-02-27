import PatientForm from '@/components/forms/PatientForm';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO:OTP VIRTICATIONS */}
     <section className='remove-scrollbar container my-auto'>
      <div className="sub-container max-w-[499px]"> 
        <Image
          src='/assets/icons/logo-full.svg'
          alt='logo'
          height={1000}
          width={1000}
          className = "mb-12 h-10 w-fit"
        />
        <PatientForm/>
        <div className='text-14-regular mt-20 flex justify-between text-center'>
          <p className='justify-items-end xl:text-left text-dark-600'>
          © 2025 MegaCare copyright
          </p>
          <Link href="/?admin=true" className='text-green-500'>
          Admin</Link>
        </div>
      </div>
     </section>
     <Image src="/assets/images/onboarding-img.png" 
     alt="patients"
     width ={1000}
     height={1000}
     className='side-img max-w-[50%]'
     />
    </div>
  );
}
