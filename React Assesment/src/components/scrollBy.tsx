import React, { useRef } from 'react';

const ScrollBy = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToDiv}>Scroll to Div</button>
      <div ref={divRef}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Excepturi neque nostrum fugit delectus! Voluptatum obcaecati consequuntur,
          quia itaque nisi corrupti a quam, qui alias ipsum laudantium dolores.
          Laborum ullam saepe adipisci quo est eius inventore nemo sequi.
          Enim animi corporis alias? Voluptas possimus consequuntur,
          labore nihil doloremque maiores ab sapiente at quo quos assumenda,
          repellendus sunt quidem sequi eligendi deserunt ad fuga dolores mollitia,
          distinctio nulla! Explicabo deserunt perferendis perspiciatis? Sapiente sunt
          aliquid distinctio? Beatae velit necessitatibus, eum enim rerum sequi doloremque
          labore excepturi reprehenderit impedit esse, asperiores sit ipsam inventore quae ut,
          ipsum aut suscipit? Dolorum illum velit rerum unde laboriosam nesciunt aspernatur quis
          adipisci voluptatibus voluptates consequuntur omnis maiores architecto alias assumenda,
          ipsam iure eveniet illo debitis natus eos! Unde cumque eos blanditiis fugiat! Illum natus
          rem quaerat nesciunt dignissimos. Consectetur asperiores ut non saepe.
          Porro provident quam laudantium libero quasi quod cupiditate voluptatem iure vero
          veritatis magnam in alias cumque assumenda labore laboriosam dolorum saepe cum sit unde,
          maiores nostrum recusandae. Praesentium, tenetur! Dolor, quisquam!
          Molestiae praesentium soluta aut necessitatibus modi nostrum porro alias quaerat,
          officia, architecto illum quo deleniti dolorem distinctio repellat? Officiis tempora recusandae,
          laudantium dolorem vitae inventore harum distinctio iste fugiat error consequuntur nisi, possimus, perspiciatis aut exercitationem suscipit quia enim et laboriosam aliquam unde deleniti. Maiores, ipsa repudiandae? Non tempora quas fugit earum id inventore at adipisci, omnis ad iste in tenetur et unde doloribus iure illo eaque architecto mollitia quod debitis nihil quasi? Consequatur, ipsa magnam? Facilis laborum, repudiandae quo sed adipisci eius atque aut. Perspiciatis, obcaecati repudiandae, in quae quibusdam assumenda dolore excepturi laudantium animi cumque quis iste omnis ipsum id. Blanditiis explicabo earum error quis maiores pariatur cupiditate! Cum earum et molestiae. Hic officia ipsa est ullam quos. Neque blanditiis repellat voluptatibus, aut similique repudiandae et possimus nisi exercitationem sunt?</p>
      </div>
    </div>
  );
}

export default ScrollBy;
