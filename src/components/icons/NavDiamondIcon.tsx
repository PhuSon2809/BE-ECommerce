const NavDiamondIcon = ({ color, className }: { color: string; className?: string }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.25189 7.45955L11.0397 4.11806V0L1.68555 5.40047L5.25189 7.45955ZM4.54656 15.3644V8.68139L1 6.63375V17.412L4.54656 15.3644ZM17.5328 8.68139L11.745 5.33972L5.95736 8.68144V15.3644L11.745 18.7059L17.5328 15.3644L17.5328 8.68139ZM12.4505 0V4.11806L18.2381 7.45955L21.8044 5.40052L12.4505 0ZM18.9436 8.68139V15.3644L22.49 17.412V6.63375L18.9436 8.68139ZM11.0397 19.9277L5.25189 16.5863L1.7253 18.6224L11.0397 24V19.9277ZM18.2381 16.5863L12.4505 19.9277V24L21.7649 18.6224L18.2381 16.5863Z'
        fill={color}
      />
    </svg>
  )
}

export default NavDiamondIcon
