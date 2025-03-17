import { Injectable } from '@angular/core';
import { SidebarLink } from '../models/SidebarLink';

@Injectable({
  providedIn: 'root'
})
export class SidebarLinksService {

  links: SidebarLink[] = [
    { link: "", label: "Home", icon: "<i class='fa-solid fa-gauge-high'></i>" },
    {
      links:
        [
          { link: "dev/module/formulary", label: "Formulary", icon: "<i class='fa-solid fa-align-left'></i>" },
          { link: "dev/module/tably", label: "Tably", icon: "<i class='fa-solid fa-table-list'></i>" },
          { link: "dev/module/notiflix", label: "Notiflix", icon: "<i class='fa-solid fa-bell'></i>" },
          { link: "dev/buttons", label: "Buttons", icon: "<i class='fa-solid fa-stop'></i>" },
          { link: "dev/modals", label: "Modal", icon: "<i class='fa-solid fa-table-columns'></i>" },
          { link: "dev/offcanvas", label: "Offcanvas", icon: "<i class='fa-solid fa-chalkboard'></i>" },
          { link: "dev/tabs", label: "Tabs", icon: "<i class='fa-solid fa-bars-progress'></i>" },
        ],
      label: "Playground", icon: "<i class='fa-solid fa-mug-hot'></i>"
    },

    { label: "separator" },
    { link: "meus-dados", label: "Meus dados", icon: "<i class='fa-solid fa-user-gear'></i>" },
    { link: "login", label: "Sair", icon: "<i class='fa-solid fa-right-from-bracket'></i>" },
  ];

}
