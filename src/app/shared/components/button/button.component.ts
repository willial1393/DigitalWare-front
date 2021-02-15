import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() useSubmitBehavior: boolean;
  @Input() isLoading: boolean;
  @Input() text;
  @Input() stylingMode: 'contained' | 'outlined' | 'text' = 'contained';
  @Input() type: 'default' | 'success' | 'danger' = 'default';
  @Input() width;
  @Input() icon: TypeIcon;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick = new EventEmitter<void>();

  constructor() {
  }

  click(): void {
    this.onClick.emit();
  }
}

type TypeIcon = 'activefolder' |
  'airplane' |
  'aligncenter' |
  'alignjustify' |
  'alignleft' |
  'alignright' |
  'arrowdown' |
  'arrowleft' |
  'arrowright' |
  'arrowup' |
  'background' |
  'blockquote' |
  'bold' |
  'bookmark' |
  'box' |
  'bulletlist' |
  'car' |
  'card' |
  'cart' |
  'chart' |
  'check' |
  'chevrondoubleleft' |
  'chevrondoubleright' |
  'chevrondown' |
  'chevronleft' |
  'chevronright' |
  'chevronup' |
  'clear' |
  'clearformat' |
  'clearsquare' |
  'clock' |
  'close' |
  'codeblock' |
  'coffee' |
  'collapse' |
  'coor' |
  'columnchooser' |
  'columnfield' |
  'comment' |
  'contains' |
  'contentlayout' |
  'copy' |
  'cut' |
  'datafield' |
  'decreaseindent' |
  'decreaselinespacing' |
  'detailslayout' |
  'docfile' |
  'docxfile' |
  'doesnotcontain' |
  'download' |
  'dragvertical' |
  'edit' |
  'endswith' |
  'equal' |
  'event' |
  'expand' |
  'export' |
  'exportpdf' |
  'exportselected' |
  'exportxlsx' |
  'favorites' |
  'fieldchooser' |
  'fields' |
  'file' |
  'fill' |
  'filter' |
  'floppy' |
  'font' |
  'fontsize' |
  'food' |
  'formula' |
  'fullscreen' |
  'gift' |
  'globe' |
  'greater' |
  'greaterorequal' |
  'group' |
  'growfont' |
  'header' |
  'help' |
  'hidepanel' |
  'hierarchy' |
  'home' |
  'image' |
  'inactivefolder' |
  'increaseindent' |
  'increaselinespacing' |
  'info' |
  'isblank' |
  'isnotblank' |
  'italic' |
  'key' |
  'less' |
  'lessorequal' |
  'like' |
  'link' |
  'map' |
  'mediumiconslayout' |
  'mention' |
  'menu' |
  'message' |
  'minus' |
  'money' |
  'more' |
  'movetofolder' |
  'music' |
  'newfolder' |
  'notequal' |
  'orderedlist' |
  'overflow' |
  'palette' |
  'parentfolder' |
  'paste' |
  'pdffile' |
  'percent' |
  'photo' |
  'pin' |
  'pinleft' |
  'pinright' |
  'plus' |
  'pptfile' |
  'pptxfile' |
  'preferences' |
  'print' |
  'product' |
  'pulldown' |
  'range' |
  'redo' |
  'refresh' |
  'rename' |
  'repeat' |
  'rowfield' |
  'rtffile' |
  'runner' |
  'save' |
  'search' |
  'selectall' |
  'share' |
  'showpanel' |
  'shrinkfont' |
  'smalliconslayout' |
  'sortdown' |
  'sortdowntext' |
  'sorted' |
  'sortup' |
  'sortuptext' |
  'spindown' |
  'spinleft' |
  'spinright' |
  'spinup' |
  'square' |
  'startswith' |
  'strike' |
  'subscript' |
  'superscript' |
  'tags' |
  'tel' |
  'tips' |
  'toolbox' |
  'trash' |
  'txtfile' |
  'underline' |
  'undo' |
  'unpin' |
  'unselectall' |
  'upload' |
  'user' |
  'variable' |
  'video' |
  'warning' |
  'xlsfile' |
  'xlsxfile';
