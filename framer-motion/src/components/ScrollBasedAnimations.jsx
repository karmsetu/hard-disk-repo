import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollBasedAnimations = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ["rgb(86, 1,245", "rgb(1,245, 13"]
    );
    return (
        <>
            <div style={{ padding: "1.2rem" }}>
                <motion.div
                    style={{
                        scaleX: scaleX,
                        background: background,
                        transformOrigin: "left",
                        position: "sticky",
                        top: 0,
                        width: "100%",
                        height: "20px",
                    }}
                ></motion.div>
                <div style={{ maxWidth: "700px", margin: "auto" }}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corrupti, dolor! Accusamus id, odio placeat
                        explicabo alias aliquam rem magni beatae pariatur in
                        nesciunt quod quia excepturi provident harum blanditiis.
                        Ducimus?
                    </p>
                    <p>
                        Quos laborum saepe, rerum sit modi magni magnam iste aut
                        expedita dolore minima harum autem ab, fugit eius ut
                        qui? Voluptate enim iure, rem tempora consectetur id
                        repellat officiis neque!
                    </p>
                    <p>
                        Molestias repellat nostrum assumenda nam! Iusto,
                        ratione, aliquid quia excepturi eaque ipsam enim
                        quibusdam ea velit sequi ipsa. Nobis nisi, modi quod
                        praesentium dolores dolor neque ipsam necessitatibus
                        quibusdam id!
                    </p>
                    <p>
                        Fugit sequi cupiditate impedit esse autem enim tenetur
                        incidunt ad, quo deleniti placeat, similique corporis
                        quasi sapiente beatae, vel reprehenderit nisi aliquam
                        eveniet. Dolorem repellat animi totam laborum quae quos!
                    </p>
                    <p>
                        Illum numquam, recusandae libero nihil, esse aperiam
                        porro illo est impedit perspiciatis placeat ullam
                        possimus consequuntur reiciendis, quod odit culpa
                        repellat! Fugiat beatae quis illum sapiente suscipit
                        illo, consectetur delectus?
                    </p>
                    <p>
                        Modi consequuntur enim repellat aperiam laudantium iste
                        earum totam error corrupti? Perspiciatis quam veritatis
                        explicabo ratione cum necessitatibus, ab culpa inventore
                        accusamus dolorem recusandae cumque fuga a. Perferendis,
                        dolore necessitatibus.
                    </p>
                    <p>
                        Nesciunt voluptatum quisquam voluptatem excepturi quod
                        voluptates reprehenderit necessitatibus impedit ipsa
                        quas, accusamus doloremque, eveniet possimus non vero
                        corrupti enim laborum, assumenda voluptate. Beatae at
                        iure modi, veritatis aliquid inventore!
                    </p>
                    <p>
                        Amet laboriosam quod distinctio odio cupiditate adipisci
                        fugit eius aliquid repellendus magnam necessitatibus,
                        officia sapiente vel hic voluptates quasi magni
                        asperiores. Iure aliquid qui animi fugit labore? Maxime,
                        a voluptatem.
                    </p>
                    <p>
                        Repellendus doloribus sed recusandae! Quasi fugiat dolor
                        iusto odio maxime voluptatem, quaerat cupiditate. Error
                        distinctio atque doloremque quod, id, a minus ratione
                        dolore doloribus, repellat eaque quam ea laborum
                        pariatur.
                    </p>
                    <p>
                        Minima, libero ipsam eum expedita reiciendis maxime at
                        enim omnis alias ab, id aperiam assumenda mollitia eos
                        aut, error corrupti exercitationem hic inventore
                        quisquam architecto neque. Optio enim labore iusto!
                    </p>
                    <p>
                        Debitis omnis nihil eius ducimus tenetur tempora,
                        laboriosam nulla beatae, ea accusantium laborum odit
                        error ipsa minus tempore consequatur. Magnam omnis
                        similique a necessitatibus fuga aut porro ut ab quasi!
                    </p>
                    <p>
                        Saepe reiciendis, deserunt odit quaerat, aspernatur unde
                        quasi ex aliquam nemo possimus earum a culpa pariatur.
                        Minus dolor quia animi cumque unde, cupiditate
                        aspernatur deserunt ab dolores? Ea, iure itaque!
                    </p>
                    <p>
                        Excepturi dolorem voluptates quos cumque necessitatibus
                        corrupti tenetur sint at accusantium iusto quam
                        aspernatur quidem, velit perspiciatis et totam
                        reprehenderit unde dolores adipisci? Illum eaque,
                        impedit aut possimus quaerat ab!
                    </p>
                    <p>
                        Sunt nobis blanditiis ad modi ratione, tenetur maiores.
                        Totam excepturi ut aliquam, ea fugiat vitae qui dolores,
                        asperiores aliquid corporis nisi sit facere voluptatem
                        enim repellat delectus expedita temporibus hic.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ScrollBasedAnimations;
