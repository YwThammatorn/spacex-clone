interface card{
    borderDir: string,
    iconImg: string,
    header: string,
    desc: string
}

const ColCard = ({borderDir, iconImg, header, desc} : card) => {
  return (
    <div className={"flex flex-col gap-[1.5rem] " + borderDir}>
        <div className="flex items-center mt-[24px]">
            <img className="w-[64px] h-[64px] pr-[0.75rem]" src={iconImg} alt="col_icon" />
            <h4>{header}</h4>
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default ColCard