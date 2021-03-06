/**
 * Copyright© 2017, Oracle and/or its affiliates. All rights reserved.
 */

import {AttachmentComponent} from "./attachment.component";
import {IComponent} from "../../../../model/component.interface";
import {IAttachmentPayload} from "../../../../model/common/payloads/attachment-payload.interface";
import {Utils} from "../../../../core/utils";

/**
 *
 */
class ImageAttachmentComponent extends AttachmentComponent implements IComponent{
    url: string;
    constructor(private utils: Utils, payload: IAttachmentPayload){
        super(payload);
        this.url = payload.url;
    }

    /**
     * Renders dom from component object
     <img class="attachment-image" src="url"/>
     * @return {HTMLElement}
     */
    render(): HTMLElement {
        return this.utils.createImage(this.url, ['attachment-image']);
    }
}

export {ImageAttachmentComponent};