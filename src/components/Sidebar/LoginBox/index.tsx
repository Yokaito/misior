import * as S from './styles'
import MenuBox from '@/components/ui/MenuBox'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/router'

export const LoginBox = () => {
  const { push } = useRouter()

  return (
    <MenuBox showArtworkInTop>
      <S.LoginBoxWrapper>
        <Button text="Login" extend onClick={() => push('/login')} />
        <S.LoginBoxTitle href="/account/create">Create Account</S.LoginBoxTitle>
      </S.LoginBoxWrapper>
    </MenuBox>
  )
}

export default LoginBox
