# `projectIntegrationJira` Submodule <a name="`projectIntegrationJira` Submodule" id="@cdktf/provider-gitlab.projectIntegrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationJira <a name="ProjectIntegrationJira" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira gitlab_project_integration_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationjira"

projectintegrationjira.NewProjectIntegrationJira(scope Construct, id *string, config ProjectIntegrationJiraConfig) ProjectIntegrationJira
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig">ProjectIntegrationJiraConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig">ProjectIntegrationJiraConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommentOnEventEnabled">ResetCommentOnEventEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommitEvents">ResetCommitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetIssuesEnabled">ResetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraAuthType">ResetJiraAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssuePrefix">ResetJiraIssuePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueRegex">ResetJiraIssueRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionAutomatic">ResetJiraIssueTransitionAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionId">ResetJiraIssueTransitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetProjectKeys">ResetProjectKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUseInheritedSettings">ResetUseInheritedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetCommentOnEventEnabled` <a name="ResetCommentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommentOnEventEnabled"></a>

```go
func ResetCommentOnEventEnabled()
```

##### `ResetCommitEvents` <a name="ResetCommitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommitEvents"></a>

```go
func ResetCommitEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuesEnabled` <a name="ResetIssuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetIssuesEnabled"></a>

```go
func ResetIssuesEnabled()
```

##### `ResetJiraAuthType` <a name="ResetJiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraAuthType"></a>

```go
func ResetJiraAuthType()
```

##### `ResetJiraIssuePrefix` <a name="ResetJiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssuePrefix"></a>

```go
func ResetJiraIssuePrefix()
```

##### `ResetJiraIssueRegex` <a name="ResetJiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueRegex"></a>

```go
func ResetJiraIssueRegex()
```

##### `ResetJiraIssueTransitionAutomatic` <a name="ResetJiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionAutomatic"></a>

```go
func ResetJiraIssueTransitionAutomatic()
```

##### `ResetJiraIssueTransitionId` <a name="ResetJiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionId"></a>

```go
func ResetJiraIssueTransitionId()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetMergeRequestsEvents"></a>

```go
func ResetMergeRequestsEvents()
```

##### `ResetProjectKeys` <a name="ResetProjectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetProjectKeys"></a>

```go
func ResetProjectKeys()
```

##### `ResetUseInheritedSettings` <a name="ResetUseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUseInheritedSettings"></a>

```go
func ResetUseInheritedSettings()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationjira"

projectintegrationjira.ProjectIntegrationJira_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationjira"

projectintegrationjira.ProjectIntegrationJira_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationjira"

projectintegrationjira.ProjectIntegrationJira_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationjira"

projectintegrationjira.ProjectIntegrationJira_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectIntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectIntegrationJira to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectIntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabledInput">CommentOnEventEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEventsInput">CommitEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabledInput">IssuesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthTypeInput">JiraAuthTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefixInput">JiraIssuePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegexInput">JiraIssueRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomaticInput">JiraIssueTransitionAutomaticInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionIdInput">JiraIssueTransitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeysInput">ProjectKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettingsInput">UseInheritedSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabled">CommentOnEventEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEvents">CommitEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabled">IssuesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthType">JiraAuthType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefix">JiraIssuePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegex">JiraIssueRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomatic">JiraIssueTransitionAutomatic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionId">JiraIssueTransitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeys">ProjectKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettings">UseInheritedSettings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `CommentOnEventEnabledInput`<sup>Optional</sup> <a name="CommentOnEventEnabledInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabledInput"></a>

```go
func CommentOnEventEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CommitEventsInput`<sup>Optional</sup> <a name="CommitEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEventsInput"></a>

```go
func CommitEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuesEnabledInput`<sup>Optional</sup> <a name="IssuesEnabledInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabledInput"></a>

```go
func IssuesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JiraAuthTypeInput`<sup>Optional</sup> <a name="JiraAuthTypeInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthTypeInput"></a>

```go
func JiraAuthTypeInput() *f64
```

- *Type:* *f64

---

##### `JiraIssuePrefixInput`<sup>Optional</sup> <a name="JiraIssuePrefixInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefixInput"></a>

```go
func JiraIssuePrefixInput() *string
```

- *Type:* *string

---

##### `JiraIssueRegexInput`<sup>Optional</sup> <a name="JiraIssueRegexInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegexInput"></a>

```go
func JiraIssueRegexInput() *string
```

- *Type:* *string

---

##### `JiraIssueTransitionAutomaticInput`<sup>Optional</sup> <a name="JiraIssueTransitionAutomaticInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomaticInput"></a>

```go
func JiraIssueTransitionAutomaticInput() interface{}
```

- *Type:* interface{}

---

##### `JiraIssueTransitionIdInput`<sup>Optional</sup> <a name="JiraIssueTransitionIdInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionIdInput"></a>

```go
func JiraIssueTransitionIdInput() *string
```

- *Type:* *string

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEventsInput"></a>

```go
func MergeRequestsEventsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProjectKeysInput`<sup>Optional</sup> <a name="ProjectKeysInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeysInput"></a>

```go
func ProjectKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UseInheritedSettingsInput`<sup>Optional</sup> <a name="UseInheritedSettingsInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettingsInput"></a>

```go
func UseInheritedSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `CommentOnEventEnabled`<sup>Required</sup> <a name="CommentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabled"></a>

```go
func CommentOnEventEnabled() interface{}
```

- *Type:* interface{}

---

##### `CommitEvents`<sup>Required</sup> <a name="CommitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEvents"></a>

```go
func CommitEvents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuesEnabled`<sup>Required</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabled"></a>

```go
func IssuesEnabled() interface{}
```

- *Type:* interface{}

---

##### `JiraAuthType`<sup>Required</sup> <a name="JiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthType"></a>

```go
func JiraAuthType() *f64
```

- *Type:* *f64

---

##### `JiraIssuePrefix`<sup>Required</sup> <a name="JiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefix"></a>

```go
func JiraIssuePrefix() *string
```

- *Type:* *string

---

##### `JiraIssueRegex`<sup>Required</sup> <a name="JiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegex"></a>

```go
func JiraIssueRegex() *string
```

- *Type:* *string

---

##### `JiraIssueTransitionAutomatic`<sup>Required</sup> <a name="JiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomatic"></a>

```go
func JiraIssueTransitionAutomatic() interface{}
```

- *Type:* interface{}

---

##### `JiraIssueTransitionId`<sup>Required</sup> <a name="JiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionId"></a>

```go
func JiraIssueTransitionId() *string
```

- *Type:* *string

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEvents"></a>

```go
func MergeRequestsEvents() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectKeys`<sup>Required</sup> <a name="ProjectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeys"></a>

```go
func ProjectKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UseInheritedSettings`<sup>Required</sup> <a name="UseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettings"></a>

```go
func UseInheritedSettings() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationJiraConfig <a name="ProjectIntegrationJiraConfig" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationjira"

&projectintegrationjira.ProjectIntegrationJiraConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Password: *string,
	Project: *string,
	Url: *string,
	ApiUrl: *string,
	CommentOnEventEnabled: interface{},
	CommitEvents: interface{},
	Id: *string,
	IssuesEnabled: interface{},
	JiraAuthType: *f64,
	JiraIssuePrefix: *string,
	JiraIssueRegex: *string,
	JiraIssueTransitionAutomatic: interface{},
	JiraIssueTransitionId: *string,
	MergeRequestsEvents: interface{},
	ProjectKeys: *[]*string,
	UseInheritedSettings: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.password">Password</a></code> | <code>*string</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.url">Url</a></code> | <code>*string</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commentOnEventEnabled">CommentOnEventEnabled</a></code> | <code>interface{}</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commitEvents">CommitEvents</a></code> | <code>interface{}</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.issuesEnabled">IssuesEnabled</a></code> | <code>interface{}</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraAuthType">JiraAuthType</a></code> | <code>*f64</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssuePrefix">JiraIssuePrefix</a></code> | <code>*string</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueRegex">JiraIssueRegex</a></code> | <code>*string</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionAutomatic">JiraIssueTransitionAutomatic</a></code> | <code>interface{}</code> | Enable automatic issue transitions. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionId">JiraIssueTransitionId</a></code> | <code>*string</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.projectKeys">ProjectKeys</a></code> | <code>*[]*string</code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.useInheritedSettings">UseInheritedSettings</a></code> | <code>interface{}</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.username">Username</a></code> | <code>*string</code> | The email or username to be used with Jira. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#password ProjectIntegrationJira#password}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#project ProjectIntegrationJira#project}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#url ProjectIntegrationJira#url}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#api_url ProjectIntegrationJira#api_url}

---

##### `CommentOnEventEnabled`<sup>Optional</sup> <a name="CommentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commentOnEventEnabled"></a>

```go
CommentOnEventEnabled interface{}
```

- *Type:* interface{}

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#comment_on_event_enabled ProjectIntegrationJira#comment_on_event_enabled}

---

##### `CommitEvents`<sup>Optional</sup> <a name="CommitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commitEvents"></a>

```go
CommitEvents interface{}
```

- *Type:* interface{}

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#commit_events ProjectIntegrationJira#commit_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuesEnabled`<sup>Optional</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.issuesEnabled"></a>

```go
IssuesEnabled interface{}
```

- *Type:* interface{}

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#issues_enabled ProjectIntegrationJira#issues_enabled}

---

##### `JiraAuthType`<sup>Optional</sup> <a name="JiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraAuthType"></a>

```go
JiraAuthType *f64
```

- *Type:* *f64

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#jira_auth_type ProjectIntegrationJira#jira_auth_type}

---

##### `JiraIssuePrefix`<sup>Optional</sup> <a name="JiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssuePrefix"></a>

```go
JiraIssuePrefix *string
```

- *Type:* *string

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#jira_issue_prefix ProjectIntegrationJira#jira_issue_prefix}

---

##### `JiraIssueRegex`<sup>Optional</sup> <a name="JiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueRegex"></a>

```go
JiraIssueRegex *string
```

- *Type:* *string

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#jira_issue_regex ProjectIntegrationJira#jira_issue_regex}

---

##### `JiraIssueTransitionAutomatic`<sup>Optional</sup> <a name="JiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionAutomatic"></a>

```go
JiraIssueTransitionAutomatic interface{}
```

- *Type:* interface{}

Enable automatic issue transitions.

Takes precedence over jira_issue_transition_id if enabled. Defaults to false. This value cannot be imported, and will not perform drift detection if changed outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#jira_issue_transition_automatic ProjectIntegrationJira#jira_issue_transition_automatic}

---

##### `JiraIssueTransitionId`<sup>Optional</sup> <a name="JiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionId"></a>

```go
JiraIssueTransitionId *string
```

- *Type:* *string

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#jira_issue_transition_id ProjectIntegrationJira#jira_issue_transition_id}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.mergeRequestsEvents"></a>

```go
MergeRequestsEvents interface{}
```

- *Type:* interface{}

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#merge_requests_events ProjectIntegrationJira#merge_requests_events}

---

##### `ProjectKeys`<sup>Optional</sup> <a name="ProjectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.projectKeys"></a>

```go
ProjectKeys *[]*string
```

- *Type:* *[]*string

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#project_keys ProjectIntegrationJira#project_keys}

---

##### `UseInheritedSettings`<sup>Optional</sup> <a name="UseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.useInheritedSettings"></a>

```go
UseInheritedSettings interface{}
```

- *Type:* interface{}

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#use_inherited_settings ProjectIntegrationJira#use_inherited_settings}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_jira#username ProjectIntegrationJira#username}

---



