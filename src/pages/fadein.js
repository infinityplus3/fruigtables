import React, {useRef, useEffect} from 'react';
import './stylin.css';

export default function FadeInSection(props) {
  const domRef = useRef();

  useEffect(() => {
    const tlis = domRef.current.getElementsByTagName("*");
    const lis = []
    for (let i = 0; i < tlis.length; i++) {
      lis.push(tlis[i])
      tlis[i].classList.add('fade-in-section')
    }

    for (let el of lis) {
      if (el.classList.contains('nofade')) {
        let items = el.getElementsByTagName("*")
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('fade-in-section')
          lis.splice(lis.indexOf(items[i]), 1)
        }
      }
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && (( entry.target.classList.contains('is-visible') ? null : entry.target.classList.add('is-visible'))));
    });

    lis.forEach(el => observer.observe(el));

    return () => lis.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div ref={ domRef }>
      { props.children }
    </div>
  )
}

