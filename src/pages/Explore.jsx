import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import ProjectCard from '../components/ProjectCard'
import Select from '../components/Select'

const projects = [
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
  {
    title: 'Project Title',
    desc: 'This is a description for the project lorem ipsum dolor sit amet',
    social: 'Telegram: t.me/sampletext',
    coin: 'X ETH pledged',
    refund: '50% funded',
    days: '123 days to go',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  },
]

const Explore = () => {
  return (
    <Layout>
      <Header page={'Explore Presales'} title={'Explore other projects'} />
      <div>
        <Input placeholder={'Search'} type={'text'} />
        <div className='flex w-full md:w-2/3 gap-5 flex-col md:flex-row pt-2 pb-10'>
          <Select placeholder={'No filter'} />
          <Select placeholder={'No filter'} />
          <Select placeholder={'No filter'} />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {projects.map((pro, index) => {
            return <ProjectCard key={index} {...pro} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Explore
