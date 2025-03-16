import { ConfirmService } from '../../../../shared/services/notiflix/confirm.service';
import { LoadingService } from '../../../../shared/services/notiflix/loading.service';
import { NotifyService } from '../../../../shared/services/notiflix/notify.service';
import { ReportService } from '../../../../shared/services/notiflix/report.service';
import { BlockService } from './../../../../shared/services/notiflix/block.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-notiflix',
  standalone: false,
  templateUrl: './notiflix.component.html',
  styleUrl: './notiflix.component.scss'
})
export class NotiflixComponent {

  blocking = false;

  constructor(
    private notifyService:NotifyService,
    private loadingService:LoadingService,
    private confirmService:ConfirmService,
    private blockService:BlockService,
    private reportService:ReportService,
  ) { }


  success(){this.notifyService.success("Deu tudo certo!");}
  error(){this.notifyService.error("Algo deu errado!");}
  warning(){this.notifyService.warning("Iso é um aviso importante!");}
  info(){this.notifyService.info("Pode seguir...");}

  loading(){
    this.loadingService.loading('loading...');
    this.loadingService.remove(3000);
  }

  confirm(){
    const yes = () => {
      this.notifyService.success("Boaa!!");
    }
    const no = () => {
      this.notifyService.warning("Que pena...");
    }
    this.confirmService.confirm('Sim','Não','Confirmação','Você está certo disso?',yes, no);
  }

  block(){
    setTimeout(()=> this.blockService.block('.card-block') ,100);
    setTimeout(()=> this.blocking = true,0);
  }

  unblock(){
    setTimeout(()=> this.blockService.unblock('.card-block') ,150);
    setTimeout(()=> this.blocking = false,100);
  }

  reportSuccess(){this.reportService.success('Informe','Sua ação obteve sucesso!', 'Ok');}
  reportError(){this.reportService.error('Informe','Sua ação ocasinou erro!', 'Ok');}
  reportWarning(){this.reportService.warning('Informe','Não faça isso novamente!', 'Ok');}
  reportInfo(){this.reportService.info('Informe','Certo!', 'Ok');}

}
