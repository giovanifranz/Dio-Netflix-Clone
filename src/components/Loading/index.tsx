import loadingGif from '@/assets/loading.gif'
import { LoadingComponent } from './styles'
export function Loading() {
  return (
    <LoadingComponent>
      <img src={loadingGif} alt="Carregando" />
    </LoadingComponent>
  )
}
