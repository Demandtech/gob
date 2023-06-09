import bnbSvg from './assets/svgs/bnb.svg'
import ethSvg from './assets/svgs/ethereum.svg'
import { TfiWorld, TfiTwitter } from 'react-icons/tfi'
import { CiFacebook } from 'react-icons/ci'
import { TbBrandTelegram } from 'react-icons/tb'

export const locks = [
  {
    token: 'Mock Grimance',
    amount: '10,000',
    id: '0ADf2CbeC83',
    decimals: 18,
    address: '0xd0C3268af45780ADf2CbeC83524800e74b06236F',
    locker: '0x9976B633830b6b208E90eE2Afc0D599615e20F27',
    symbol: 'Grimace',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
    title: '',
    lock: true,
  },
  {
    token: 'TrustDe',
    amount: '123,213',
    id: '771BdF421',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'TD',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
    title: 'TrustDe for 30 days',
    lock: true,
  },
  {
    token: 'MockSTFU',
    amount: '10,000',
    id: '0xe6Fb18D',
    decimals: 18,
    address: '0x1e0e0DA973D852fF5C730f13790a754C67f97eeD',
    locker: '0xe6Fb18D28df0D391ce93ca26576DE3b976cf8AD4',
    symbol: 'MockSTFU',
    locked_at: '2023-03-24T02:00 (UTC)',
    unlocks_in: 'Unlockable now',
    title: '0x1e0e0DA973D852fF5C730f13790a754C67f97eeD',
    lock: true,
  },

  {
    token: 'TrustDe',
    amount: '10,000',
    Id: 'b8C093fBf',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'TD',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
    title: 'TrustDe for 30 days',
    lock: true,
  },

  {
    token: 'MockSTFU',
    amount: '10,000',
    id: '76DE3b9',
    decimals: 18,
    address: '0x1e0e0DA973D852fF5C730f13790a754C67f97eeD',
    locker: '0xe6Fb18D28df0D391ce93ca26576DE3b976cf8AD4',
    symbol: 'MockSTFU',
    locked_at: '2023-03-24T02:00 (UTC)',
    unlocks_in: 'Unlockable now',
    title: '0x1e0e0DA973D852fF5C730f13790a754C67f97eeD',
    lock: true,
  },

  {
    token: 'MockSTFU/$WBNB',
    amount: '10,000',
    id: 'BdF421998',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'TD',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_at: '2023-03-24T01:47 (UTC)',
    title: 'TrustDe for 30 days',
    lock: false,
  },

  {
    token: 'Mock Grimance',
    amount: '10,000',
    id: '7EF9702Bd',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'TD',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
    title: 'TrustDe for 30 days',
    lock: true,
  },

  {
    token: 'SCALE',
    amount: '124,008.78',
    id: '0x2A8C7e9',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'SCALE',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_at: '2023-03-24T02:03 (UTC)',
    title: 'TrustDe for 30 days',
    lock: false,
  },
  {
    token: 'TrustDe',
    amount: '10,000',
    id: '721dA7663',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'TD',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
    title: 'TrustDe for 30 days',
    lock: true,
  },
  {
    token: 'MockSTFU',
    amount: '10,000',
    id: '0x0Fb2Ded',
    decimals: 18,
    address: '0x0Fb2De721dA76635B1E7BdD649FC053a17de9b38',
    locker: '0x2A8C7e968771BdF4219987EF9702Bdab8C093fBf',
    symbol: 'TD',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
    title: 'TrustDe for 30 days',
    lock: true,
  },
]

export const launchpads = [
  {
    id: '11111',
    name: 'DOGFOOD',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Success',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: true,
    kyc: true,
    icon: bnbSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  },
  {
    id: '2222',
    name: 'Advance Mode 2',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Sale Closed',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: true,
    kyc: true,
    icon: ethSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  },
  {
    id: '3333',
    name: 'Advance Mode 3',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Upcoming',
    range: '5 ETH - 10EH',
    progress: 89,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: true,
    kyc: false,
    icon: ethSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  },
  {
    id: '4444',
    name: 'Contributor One',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Sale Canceled',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: false,
    kyc: true,
    icon: bnbSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <TbBrandTelegram />],
  },
  {
    id: '5555',
    name: 'Contributor Two',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Sale Ended',
    range: '5 ETH - 10EH',
    progress: 10,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: true,
    kyc: true,
    icon: bnbSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  },
  {
    id: '66666',
    name: 'Contributor Three',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Upcoming',
    range: '5 ETH - 10EH',
    progress: 11,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: false,
    kyc: false,
    icon: ethSvg,
    socials: [<TfiWorld />],
  },
  {
    id: '77777',
    name: 'Contributor Four',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'SoftCap/HardCap',
    status: 'Sale Canceled',
    range: '5 ETH - 10EH',
    progress: 50,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: false,
    kyc: true,
    icon: ethSvg,
    socials: [<TfiWorld />, <TbBrandTelegram />],
  },

  {
    id: '0000000',
    name: 'Contributor One',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'Success',
    status: 'Sale Ended',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: false,
    kyc: true,
    icon: ethSvg,
    socials: [<TfiWorld />, <CiFacebook />, <TbBrandTelegram />],
  },
  {
    id: '1212112',
    name: 'Contributor Two',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'Soft/Hard',
    status: 'Sale Canceled',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: true,
    kyc: true,
    icon: ethSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />],
  },
  {
    id: '1313131313',
    name: 'Contributor Three',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'Soft/Hard',
    status: 'Sale Ended',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: false,
    kyc: true,
    icon: bnbSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  },
  {
    id: '14141414',
    name: 'Contributor Four',
    img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
    eth: '6,300,000,000 DOGFOOD',
    leve: 'Soft/Hard',
    status: 'Sale Closed',
    range: '5 ETH - 10EH',
    progress: 0,
    liquidity: 51,
    lockTime: '90days',
    saleStart: '00:01:19',
    audit: true,
    kyc: false,
    icon: bnbSvg,
    socials: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  },
]
