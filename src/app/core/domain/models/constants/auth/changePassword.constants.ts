import { PasswordRequirement } from '@DomainInterfaces/requirementPasswor.interface';
import { REGEX_PATTERNS } from '../shared/regex.constants';
import {
  IProgress_Key,
  IProgressBar,
} from '@DomainInterfaces/progressbar.interface';
import {
  ProgresssBarClass_Enum,
  WidthProgress_Enum,
} from '../../enum/changePassword/progress-bar.enum';

export const REQUIRED_PASSWORD_CONST: PasswordRequirement[] = [
  {
    id: 1,
    icon: 'point',
    description: 'Debe contener como mínimo un número y un símbolo',
    regex: REGEX_PATTERNS.minimumSimbolAndNumber,
    fulfilled: false,
  },
  {
    id: 2,
    icon: 'point',
    description: 'Debe combinar mayúsculas y minúsculas',
    regex: REGEX_PATTERNS.combineUperLowerLetter,
    fulfilled: false,
  },
  {
    id: 3,
    icon: 'point',
    description: 'Debe tener al menos 8 caracteres',
    regex: REGEX_PATTERNS.minimumCharacter,
    fulfilled: false,
  },
];

export const PROGRESS_BAR_CONST: IProgressBar = {
  default: {
    width: WidthProgress_Enum.default,
    className: ProgresssBarClass_Enum.default,
  },
  weak: {
    width: WidthProgress_Enum.Weak,
    className: ProgresssBarClass_Enum.Weak,
  },
  medium: {
    width: WidthProgress_Enum.medium,
    className: ProgresssBarClass_Enum.medium,
  },
  strong: {
    width: WidthProgress_Enum.strong,
    className: ProgresssBarClass_Enum.strong,
  },
};

export const PROGRESS_KEY_CONST: IProgress_Key = {
  default: 'default',
  weak: 'weak',
  medium: 'medium',
  strong: 'strong',
};

export const GENARAL_CHANGE_PASSWORD_CONST = {
  default_icon: 'point',
  check_icon: 'check',
  alert_icon: 'alert',
  form_newPassword: 'newPassword',
  form_confirmedPassword: 'confirmedPassword',
};

export const MESSAGE_CHANGE_PASSWORD_CONST = {
  FIRST_ERROR: 'AUTH.CHANGE.differentPassword',
  ERROR_PASSWORD: 'AUTH.CHANGE.errorSameLastPassword',
};
