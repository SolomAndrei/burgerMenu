import './App.css';
import Menu from './Menu/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: 'Main', href: '/main', icon: <DomainVerificationIcon /> },
    { value: 'Service', href: '/service', icon: <MiscellaneousServicesIcon /> },
    { value: 'Shop', href: '/shop', icon: <AdbIcon /> },
    { value: 'About us', href: '/about', icon: <InfoIcon /> },
  ]




  return (
    <div className="App">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus voluptatem libero. Corrupti ad voluptatibus, perspiciatis quis provident nesciunt sunt nulla numquam cumque dolorum sed, non laborum facere, expedita ipsam?
          Placeat aliquid harum similique cum facere beatae enim doloremque, sed iste dicta voluptate quisquam vitae sequi, debitis eaque accusamus consectetur cumque magnam quasi. Totam voluptate impedit laudantium quos assumenda explicabo?
          Unde rem fugit ratione corporis blanditiis dicta fugiat. Possimus omnis ipsum ullam aut quam ea ratione corporis nulla veniam, atque sed repellat unde voluptas voluptate nobis quod dicta mollitia odit.
          Recusandae ad quos eius, dolores molestias temporibus sint. Nam perspiciatis quasi esse unde, earum atque in rem quia magnam quas quos. In, ut vitae distinctio dignissimos alias consequatur dicta dolore.
          Vero exercitationem natus laboriosam officia, nostrum dolores, voluptatibus enim necessitatibus commodi molestiae unde quod porro! Esse dolor odit magni amet voluptas debitis optio, exercitationem provident possimus eaque consequatur non eos.
          Qui illum ipsum maiores consequatur odit, voluptates molestiae eius expedita, neque facere voluptate nulla necessitatibus ipsam, quis sit assumenda tempora repellendus tenetur quia dolor nemo delectus? Qui error laboriosam fugiat!
          Laborum vitae porro asperiores, autem repellendus quod alias fugiat totam quos dignissimos mollitia accusantium veritatis velit assumenda cum? Praesentium cumque minima amet officiis ducimus tenetur soluta magni nesciunt sapiente itaque!
          Perferendis vero quis tempora doloremque id dolorum sit voluptates eveniet autem natus recusandae possimus inventore, iste maiores aspernatur culpa veritatis vitae exercitationem esse, optio unde impedit? Maxime sed modi quisquam.
          Ipsum voluptate fugit exercitationem obcaecati quaerat, amet molestiae placeat commodi laudantium ad quo tenetur minus. Vitae deleniti, illo quia soluta consequatur labore unde dicta voluptatibus magni nam totam quasi dolorem.
          Quibusdam, voluptas unde a consectetur illo quis laborum quo cumque maxime sequi eaque esse quas non facere quod cum. At soluta nam cumque similique. Eius dolore pariatur non nostrum ipsum.</p>



      </main>
      <Menu header={'Burger menu'} items={items} active={menuActive} setActive={setMenuActive} />

    </div>
  );
}

export default App;
