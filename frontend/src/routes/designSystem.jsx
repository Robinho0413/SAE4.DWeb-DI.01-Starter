import SubButton from "../ui/Button/SubButton";
import ButtonMovie from "../ui/Button/ButtonMovie";

export default function DesignSystem() {
  return (
    <>
    <div className="bg-black grid py-10 place-content-center">
      <SubButton intent={'primary'} size={'small'}>S'abonner</SubButton>
    </div>

    <div className="bg-black grid py-10 place-content-center">
      <SubButton intent={'secondary'} size={'medium'}>S'abonner</SubButton>
    </div>

    <div className="bg-black grid py-10 place-content-center">
      <SubButton intent={'secondary'} size={'large'}>S'abonner</SubButton>
    </div>


    <div className="bg-movie grid py-10 place-content-center">
      <ButtonMovie intent={'primary'} size={'medium'} className={'group flex gap-3 items-center'} text="VOIR" ></ButtonMovie>
    </div>

    <div className="bg-movie grid py-10 place-content-center">
      <ButtonMovie intent={'primary'} size={'medium'} className={'group flex gap-3 items-center'} text="BANDE-ANNONCE"></ButtonMovie>
    </div>

    
    
    </>
  )
}
