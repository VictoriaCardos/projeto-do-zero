import { React, useState, useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton
} from './styles'
import api from '../../sevices/api'
import { context } from '../../context'

const Header = () => {
  const ctx = useContext(context)
  const [searchedValue, setSearchedValue] = useState('')

  const verifyInput = () => {
    if (searchedValue !== '') {
      getUserData()
      setSearchedValue('')
    } else {
      alert('Insira um user para a pesquisa primeiro!')
    }
  }

  async function getUserData() {
    try {
      const response = await api.get(`/${searchedValue}`)
      const repos = await api.get(`/${searchedValue}/repos`)
      const followers = await api.get(`/${searchedValue}/followers`)
      const following = await api.get(`/${searchedValue}/following`)

      ctx.setUserData(response.data)
      ctx.setRepos(repos.data)
      ctx.setFollowers(followers.data)
      ctx.setFollowing(following.data)
    } catch (err) {
      console.log(err)
      alert('Usuário não encontrado!')
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>
        Github Profile <AiFillGithub size={45} />
      </HeaderTitle>

      <HeaderInputContainer>
        <HeaderInput
          value={searchedValue}
          onChange={e => setSearchedValue(e.target.value)}
        />

        <HeaderSearchButton onClick={verifyInput}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
