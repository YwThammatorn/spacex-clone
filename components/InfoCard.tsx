interface card{
    info: string,
    button: React.ReactNode
}

const InfoCard = ({info, button} : card) => {
  return (
    <div className="flex flex-col mt-[75px] mb-[75px] items-center text-center">
        {/* vertical line */}
        <div className="bg-[#fff] w-[1px] h-[160px]"></div>

        {info ?
            <p className="max-w-[75%] mt-[40px] text-[0.875rem] text-[var(--white-50)] leading-[1.5rem]">{info}</p>
            :
            <div></div>
        }

        {info ?
            button
            :
            <div className="mt-[40px]">{button}</div>
        }
    </div>
  )
}

export default InfoCard