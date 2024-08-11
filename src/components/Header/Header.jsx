import profile from '../../assets/images/profile1.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-5xl mx-auto'>
                  <h1 className='text-4xl font-bold'>Knowledege Cafe</h1>
                  <img className='w-24' src={profile} alt="" />
        </header>
    );
};

export default Header;