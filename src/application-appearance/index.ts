/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAppearanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Markdown text shown on the sign-in and sign-up page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#description ApplicationAppearance#description}
  */
  readonly description?: string;
  /**
  * Add header and footer to all outgoing emails if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}
  */
  readonly emailHeaderAndFooterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Message in the system footer bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}
  */
  readonly footerMessage?: string;
  /**
  * Message in the system header bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}
  */
  readonly headerMessage?: string;
  /**
  * Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}
  */
  readonly keepSettingsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Markdown text shown on the group or project member page for users with permission to change members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}
  */
  readonly memberGuidelines?: string;
  /**
  * Background color for the system header or footer bar, in CSS hex notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}
  */
  readonly messageBackgroundColor?: string;
  /**
  * Font color for the system header or footer bar, in CSS hex notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}
  */
  readonly messageFontColor?: string;
  /**
  * Markdown text shown on the new project page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}
  */
  readonly newProjectGuidelines?: string;
  /**
  * Markdown text shown on the profile page below the Public Avatar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}
  */
  readonly profileImageGuidelines?: string;
  /**
  * An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}
  */
  readonly pwaDescription?: string;
  /**
  * Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}
  */
  readonly pwaName?: string;
  /**
  * Short name for Progressive Web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}
  */
  readonly pwaShortName?: string;
  /**
  * Application title on the sign-in and sign-up page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#title ApplicationAppearance#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance gitlab_application_appearance}
*/
export class ApplicationAppearance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_application_appearance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAppearance to import
  * @param importFromId The id of the existing ApplicationAppearance that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAppearance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_application_appearance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance gitlab_application_appearance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAppearanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationAppearanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_application_appearance',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._emailHeaderAndFooterEnabled = config.emailHeaderAndFooterEnabled;
    this._footerMessage = config.footerMessage;
    this._headerMessage = config.headerMessage;
    this._keepSettingsOnDestroy = config.keepSettingsOnDestroy;
    this._memberGuidelines = config.memberGuidelines;
    this._messageBackgroundColor = config.messageBackgroundColor;
    this._messageFontColor = config.messageFontColor;
    this._newProjectGuidelines = config.newProjectGuidelines;
    this._profileImageGuidelines = config.profileImageGuidelines;
    this._pwaDescription = config.pwaDescription;
    this._pwaName = config.pwaName;
    this._pwaShortName = config.pwaShortName;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_header_and_footer_enabled - computed: true, optional: true, required: false
  private _emailHeaderAndFooterEnabled?: boolean | cdktf.IResolvable; 
  public get emailHeaderAndFooterEnabled() {
    return this.getBooleanAttribute('email_header_and_footer_enabled');
  }
  public set emailHeaderAndFooterEnabled(value: boolean | cdktf.IResolvable) {
    this._emailHeaderAndFooterEnabled = value;
  }
  public resetEmailHeaderAndFooterEnabled() {
    this._emailHeaderAndFooterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailHeaderAndFooterEnabledInput() {
    return this._emailHeaderAndFooterEnabled;
  }

  // footer_message - computed: true, optional: true, required: false
  private _footerMessage?: string; 
  public get footerMessage() {
    return this.getStringAttribute('footer_message');
  }
  public set footerMessage(value: string) {
    this._footerMessage = value;
  }
  public resetFooterMessage() {
    this._footerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerMessageInput() {
    return this._footerMessage;
  }

  // header_message - computed: true, optional: true, required: false
  private _headerMessage?: string; 
  public get headerMessage() {
    return this.getStringAttribute('header_message');
  }
  public set headerMessage(value: string) {
    this._headerMessage = value;
  }
  public resetHeaderMessage() {
    this._headerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMessageInput() {
    return this._headerMessage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_settings_on_destroy - computed: true, optional: true, required: false
  private _keepSettingsOnDestroy?: boolean | cdktf.IResolvable; 
  public get keepSettingsOnDestroy() {
    return this.getBooleanAttribute('keep_settings_on_destroy');
  }
  public set keepSettingsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._keepSettingsOnDestroy = value;
  }
  public resetKeepSettingsOnDestroy() {
    this._keepSettingsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSettingsOnDestroyInput() {
    return this._keepSettingsOnDestroy;
  }

  // member_guidelines - computed: true, optional: true, required: false
  private _memberGuidelines?: string; 
  public get memberGuidelines() {
    return this.getStringAttribute('member_guidelines');
  }
  public set memberGuidelines(value: string) {
    this._memberGuidelines = value;
  }
  public resetMemberGuidelines() {
    this._memberGuidelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGuidelinesInput() {
    return this._memberGuidelines;
  }

  // message_background_color - computed: true, optional: true, required: false
  private _messageBackgroundColor?: string; 
  public get messageBackgroundColor() {
    return this.getStringAttribute('message_background_color');
  }
  public set messageBackgroundColor(value: string) {
    this._messageBackgroundColor = value;
  }
  public resetMessageBackgroundColor() {
    this._messageBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBackgroundColorInput() {
    return this._messageBackgroundColor;
  }

  // message_font_color - computed: true, optional: true, required: false
  private _messageFontColor?: string; 
  public get messageFontColor() {
    return this.getStringAttribute('message_font_color');
  }
  public set messageFontColor(value: string) {
    this._messageFontColor = value;
  }
  public resetMessageFontColor() {
    this._messageFontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFontColorInput() {
    return this._messageFontColor;
  }

  // new_project_guidelines - computed: true, optional: true, required: false
  private _newProjectGuidelines?: string; 
  public get newProjectGuidelines() {
    return this.getStringAttribute('new_project_guidelines');
  }
  public set newProjectGuidelines(value: string) {
    this._newProjectGuidelines = value;
  }
  public resetNewProjectGuidelines() {
    this._newProjectGuidelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newProjectGuidelinesInput() {
    return this._newProjectGuidelines;
  }

  // profile_image_guidelines - computed: true, optional: true, required: false
  private _profileImageGuidelines?: string; 
  public get profileImageGuidelines() {
    return this.getStringAttribute('profile_image_guidelines');
  }
  public set profileImageGuidelines(value: string) {
    this._profileImageGuidelines = value;
  }
  public resetProfileImageGuidelines() {
    this._profileImageGuidelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileImageGuidelinesInput() {
    return this._profileImageGuidelines;
  }

  // pwa_description - computed: true, optional: true, required: false
  private _pwaDescription?: string; 
  public get pwaDescription() {
    return this.getStringAttribute('pwa_description');
  }
  public set pwaDescription(value: string) {
    this._pwaDescription = value;
  }
  public resetPwaDescription() {
    this._pwaDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwaDescriptionInput() {
    return this._pwaDescription;
  }

  // pwa_name - computed: true, optional: true, required: false
  private _pwaName?: string; 
  public get pwaName() {
    return this.getStringAttribute('pwa_name');
  }
  public set pwaName(value: string) {
    this._pwaName = value;
  }
  public resetPwaName() {
    this._pwaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwaNameInput() {
    return this._pwaName;
  }

  // pwa_short_name - computed: true, optional: true, required: false
  private _pwaShortName?: string; 
  public get pwaShortName() {
    return this.getStringAttribute('pwa_short_name');
  }
  public set pwaShortName(value: string) {
    this._pwaShortName = value;
  }
  public resetPwaShortName() {
    this._pwaShortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwaShortNameInput() {
    return this._pwaShortName;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      email_header_and_footer_enabled: cdktf.booleanToTerraform(this._emailHeaderAndFooterEnabled),
      footer_message: cdktf.stringToTerraform(this._footerMessage),
      header_message: cdktf.stringToTerraform(this._headerMessage),
      keep_settings_on_destroy: cdktf.booleanToTerraform(this._keepSettingsOnDestroy),
      member_guidelines: cdktf.stringToTerraform(this._memberGuidelines),
      message_background_color: cdktf.stringToTerraform(this._messageBackgroundColor),
      message_font_color: cdktf.stringToTerraform(this._messageFontColor),
      new_project_guidelines: cdktf.stringToTerraform(this._newProjectGuidelines),
      profile_image_guidelines: cdktf.stringToTerraform(this._profileImageGuidelines),
      pwa_description: cdktf.stringToTerraform(this._pwaDescription),
      pwa_name: cdktf.stringToTerraform(this._pwaName),
      pwa_short_name: cdktf.stringToTerraform(this._pwaShortName),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_header_and_footer_enabled: {
        value: cdktf.booleanToHclTerraform(this._emailHeaderAndFooterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      footer_message: {
        value: cdktf.stringToHclTerraform(this._footerMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_message: {
        value: cdktf.stringToHclTerraform(this._headerMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_settings_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._keepSettingsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member_guidelines: {
        value: cdktf.stringToHclTerraform(this._memberGuidelines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_background_color: {
        value: cdktf.stringToHclTerraform(this._messageBackgroundColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_font_color: {
        value: cdktf.stringToHclTerraform(this._messageFontColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_project_guidelines: {
        value: cdktf.stringToHclTerraform(this._newProjectGuidelines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_image_guidelines: {
        value: cdktf.stringToHclTerraform(this._profileImageGuidelines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwa_description: {
        value: cdktf.stringToHclTerraform(this._pwaDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwa_name: {
        value: cdktf.stringToHclTerraform(this._pwaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwa_short_name: {
        value: cdktf.stringToHclTerraform(this._pwaShortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
