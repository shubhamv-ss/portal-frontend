/********************************************************************************
 * Copyright (c) 2021, 2024 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Trans, useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogActions,
  Typography,
} from '@catena-x/portal-shared-components'

export type StatusTagIcon = {
  type?: 'confirmed' | 'pending' | 'declined' | 'label'
}

export type RegistrationDeclinedProps = {
  openDialog: boolean
  handleOverlayClose: React.MouseEventHandler
}

const RegistrationDeclinedOverlay = ({
  openDialog,
  handleOverlayClose,
}: RegistrationDeclinedProps) => {
  const { t } = useTranslation()

  return (
    <Dialog
      open={openDialog}
      additionalModalRootStyles={{
        width: '50%',
      }}
    >
      <DialogHeader title={t('content.registrationDeclined.title')} />
      <DialogContent
        sx={{
          padding: '0 120px',
          marginBottom: 5,
        }}
      >
        <div className="registration-review">
          <Trans>
            <Typography variant="body2">
              {t('content.registrationDeclined.description')}
            </Typography>
          </Trans>
        </div>
      </DialogContent>
      <DialogActions
        helperText={t('content.registrationInreview.helperText')}
      ></DialogActions>
    </Dialog>
  )
}

export default RegistrationDeclinedOverlay
