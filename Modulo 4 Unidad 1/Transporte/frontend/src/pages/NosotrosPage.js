import '../styles/components/pages/NosotrosPage.css';

import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className='holder'>
            <div className='historia'>
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero eu massa vehicula luctus. In hac habitasse platea dictumst. Nam vel erat urna. Sed luctus tempus mollis. Nulla luctus est in tristique molestie. Nunc ac aliquam sem, id feugiat velit. Praesent fermentum erat vel mi vulputate, nec hendrerit enim cursus. Morbi at nisl libero. Suspendisse potenti.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero eu massa vehicula luctus. In hac habitasse platea dictumst. Nam vel erat urna. Sed luctus tempus mollis. Nulla luctus est in tristique molestie. Nunc ac aliquam sem, id feugiat velit. Praesent fermentum erat vel mi vulputate, nec hendrerit enim cursus. Morbi at nisl libero. Suspendisse potenti.
                </p>
            </div>
            <div className='staff'>
                <h2>Staff</h2>
                <div className='personas'>
                <div className='persona'>
                    <img src='img/nosotros/nosotros1.jpg' alt='Juan Gomez' />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero eu massa vehicula luctus. In hac habitasse platea dictumst. Nam vel erat urna. Sed luctus tempus mollis. Nulla luctus est in tristique molestie. Nunc ac aliquam sem, id feugiat velit. Praesent fermentum erat vel mi vulputate, nec hendrerit enim cursus. Morbi at nisl libero. Suspendisse potenti.
                    </p>
                </div>
            </div>            
        </div>
    </main>
    );
}

export default NosotrosPage;