/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectExternalStatusCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL of the external status check service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#external_url ProjectExternalStatusCheck#external_url}
  */
  readonly externalUrl: string;
  /**
  * The display name of the external status check service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#name ProjectExternalStatusCheck#name}
  */
  readonly name: string;
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#project_id ProjectExternalStatusCheck#project_id}
  */
  readonly projectId: number;
  /**
  * The list of IDs of protected branches to scope the rule by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#protected_branch_ids ProjectExternalStatusCheck#protected_branch_ids}
  */
  readonly protectedBranchIds?: number[];
  /**
  * The HMAC secret for the external status check.  If this is set, then removed from the config, the value will get set to empty in the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#shared_secret ProjectExternalStatusCheck#shared_secret}
  */
  readonly sharedSecret?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check gitlab_project_external_status_check}
*/
export class ProjectExternalStatusCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_external_status_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectExternalStatusCheck to import
  * @param importFromId The id of the existing ProjectExternalStatusCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectExternalStatusCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_external_status_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check gitlab_project_external_status_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectExternalStatusCheckConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectExternalStatusCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_external_status_check',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.4.0',
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
    this._externalUrl = config.externalUrl;
    this._name = config.name;
    this._projectId = config.projectId;
    this._protectedBranchIds = config.protectedBranchIds;
    this._sharedSecret = config.sharedSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_url - computed: false, optional: false, required: true
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // hmac - computed: true, optional: false, required: false
  public get hmac() {
    return this.getBooleanAttribute('hmac');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protected_branch_ids - computed: true, optional: true, required: false
  private _protectedBranchIds?: number[]; 
  public get protectedBranchIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_branch_ids')));
  }
  public set protectedBranchIds(value: number[]) {
    this._protectedBranchIds = value;
  }
  public resetProtectedBranchIds() {
    this._protectedBranchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchIdsInput() {
    return this._protectedBranchIds;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_url: cdktf.stringToTerraform(this._externalUrl),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      protected_branch_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._protectedBranchIds),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_url: {
        value: cdktf.stringToHclTerraform(this._externalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protected_branch_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._protectedBranchIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
