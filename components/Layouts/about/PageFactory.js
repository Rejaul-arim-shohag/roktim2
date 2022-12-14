import PageAbout from '../../../styles/About.module.scss'

const PageFactory = () => {
  return (
    <>
        <section className={PageAbout.factory}>
            <div className="container">
                <h1 
                className='text-light display-1 fw-bold text-center align-item-center vertical-align align-middle'>About Us</h1>
            </div>
        </section>
    </>
  )
}

export default PageFactory