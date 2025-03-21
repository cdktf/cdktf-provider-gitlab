/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceExternalWikiConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL of the external wiki.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki#external_wiki_url ServiceExternalWiki#external_wiki_url}
  */
  readonly externalWikiUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki#id ServiceExternalWiki#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki#project ServiceExternalWiki#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki gitlab_service_external_wiki}
*/
export class ServiceExternalWiki extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_external_wiki";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceExternalWiki resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceExternalWiki to import
  * @param importFromId The id of the existing ServiceExternalWiki that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceExternalWiki to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_service_external_wiki", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_external_wiki gitlab_service_external_wiki} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceExternalWikiConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceExternalWikiConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_external_wiki',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.10.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalWikiUrl = config.externalWikiUrl;
    this._id = config.id;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // external_wiki_url - computed: false, optional: false, required: true
  private _externalWikiUrl?: string; 
  public get externalWikiUrl() {
    return this.getStringAttribute('external_wiki_url');
  }
  public set externalWikiUrl(value: string) {
    this._externalWikiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalWikiUrlInput() {
    return this._externalWikiUrl;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_wiki_url: cdktf.stringToTerraform(this._externalWikiUrl),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_wiki_url: {
        value: cdktf.stringToHclTerraform(this._externalWikiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
