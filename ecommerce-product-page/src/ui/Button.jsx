function Button({ children, onClick, type, modal }) {
  const sliderBtn = `absolute  transform top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full ${modal ? "block" : "md:hidden"}`;

  const descriptionBtn = "w-full px-5 py-3 rounded-lg flex items-center";

  const styles = {
    left: `${sliderBtn} left-4 ${modal ? "left-0 -translate-x-1/2" : ""}`,
    right: `${sliderBtn} right-4 ${modal ? "right-0 translate-x-1/2" : ""}`,
    counter: `${descriptionBtn} justify-between bg-light-grayish-blue`,
    cart: `${descriptionBtn} justify-center gap-3 text-black bg-orange-main shadow-2xl md:shadow-none shadow-orange-main/40 hover:opacity-70`,
    checkout: `${descriptionBtn} text-black bg-orange-main font-bold justify-center`,
  };

  if (type === "counter")
    return <button className={styles[type]}>{children}</button>;

  if (type === "cart")
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

//w-10 h-10 flex justify-center items-center
