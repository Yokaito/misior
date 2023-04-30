import MenuBox from '@/components/ui/MenuBox'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/router'

export const DownloadBox = () => {
  const { push } = useRouter()

  return (
    <>
      <MenuBox showArtworkInTop={false}>
        <Button text="Download" extend onClick={() => push('/download')} />
      </MenuBox>
    </>
  )
}
