/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_security_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSecurityPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or Full Path of the group which will have the security policy project assigned to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_security_policy_attachment#group GroupSecurityPolicyAttachment#group}
  */
  readonly group: string;
  /**
  * The ID or Full Path of the security policy project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_security_policy_attachment#policy_project GroupSecurityPolicyAttachment#policy_project}
  */
  readonly policyProject: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_security_policy_attachment gitlab_group_security_policy_attachment}
*/
export class GroupSecurityPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_security_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupSecurityPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupSecurityPolicyAttachment to import
  * @param importFromId The id of the existing GroupSecurityPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_security_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupSecurityPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_security_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_security_policy_attachment gitlab_group_security_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSecurityPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSecurityPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_security_policy_attachment',
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
    this._group = config.group;
    this._policyProject = config.policyProject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_graphql_id - computed: true, optional: false, required: false
  public get groupGraphqlId() {
    return this.getStringAttribute('group_graphql_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_project - computed: false, optional: false, required: true
  private _policyProject?: string; 
  public get policyProject() {
    return this.getStringAttribute('policy_project');
  }
  public set policyProject(value: string) {
    this._policyProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyProjectInput() {
    return this._policyProject;
  }

  // policy_project_graphql_id - computed: true, optional: false, required: false
  public get policyProjectGraphqlId() {
    return this.getStringAttribute('policy_project_graphql_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      policy_project: cdktf.stringToTerraform(this._policyProject),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_project: {
        value: cdktf.stringToHclTerraform(this._policyProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
