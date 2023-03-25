import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.removeStyle()
  }
  removeStyle() {
    const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container'),
      dropdownItems = document.querySelectorAll('.dropdown__item')

    if (mediaQuery.matches) {
      dropdownContainer.forEach((e) => {
        e.removeAttribute('style')
      })

      dropdownItems.forEach((e) => {
        e.classList.remove('show-dropdown')
      })
    }
  }

  showMenu() {
    const toggle = document.getElementById('nav-toggle'),
          nav = document.getElementById('nav-menu')

    if (toggle != null && nav != null) {
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('show-icon')
    }
  }

  toggleItem() {
    const dropdownItem = document.getElementById('dropdown-item'),
          dropdownContainer = document.getElementById('dropdown-container')

    if (dropdownContainer != null && dropdownItem != null) {
      if (dropdownItem.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        dropdownItem.classList.remove('show-dropdown')
      }
      else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        dropdownItem.classList.add('show-dropdown')
      }
    }
  }
}
