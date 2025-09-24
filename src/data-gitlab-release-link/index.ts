/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabReleaseLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link#link_id DataGitlabReleaseLink#link_id}
  */
  readonly linkId: number;
  /**
  * The ID or [URL-encoded path of the project](https://docs.gitlab.com/api/index/#namespaced-path-encoding).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link#project DataGitlabReleaseLink#project}
  */
  readonly project: string;
  /**
  * The tag associated with the Release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link#tag_name DataGitlabReleaseLink#tag_name}
  */
  readonly tagName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link gitlab_release_link}
*/
export class DataGitlabReleaseLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_release_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabReleaseLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabReleaseLink to import
  * @param importFromId The id of the existing DataGitlabReleaseLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabReleaseLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_release_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/data-sources/release_link gitlab_release_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabReleaseLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabReleaseLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_release_link',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.4.1',
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
    this._linkId = config.linkId;
    this._project = config.project;
    this._tagName = config.tagName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_asset_url - computed: true, optional: false, required: false
  public get directAssetUrl() {
    return this.getStringAttribute('direct_asset_url');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // filepath - computed: true, optional: false, required: false
  public get filepath() {
    return this.getStringAttribute('filepath');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_id - computed: false, optional: false, required: true
  private _linkId?: number; 
  public get linkId() {
    return this.getNumberAttribute('link_id');
  }
  public set linkId(value: number) {
    this._linkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId;
  }

  // link_type - computed: true, optional: false, required: false
  public get linkType() {
    return this.getStringAttribute('link_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      link_id: cdktf.numberToTerraform(this._linkId),
      project: cdktf.stringToTerraform(this._project),
      tag_name: cdktf.stringToTerraform(this._tagName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      link_id: {
        value: cdktf.numberToHclTerraform(this._linkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
