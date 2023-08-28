const Heading=({name})=>{
    return(
        <div className="ml-8 mt-6 flex items-center gap-32">
          <h1 className="font-bold text-xl">{name}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
          >
            <path
              d="M18.021 2.02101L10 10.042L1.97899 2.02101"
              stroke="#018191"
              stroke-width="4"
            />
          </svg>
        </div>
    )
}
export default Heading