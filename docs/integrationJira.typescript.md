# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="@cdktf/provider-gitlab.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira gitlab_integration_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer"></a>

```typescript
import { integrationJira } from '@cdktf/provider-gitlab'

new integrationJira.IntegrationJira(scope: Construct, id: string, config: IntegrationJiraConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommentOnEventEnabled">resetCommentOnEventEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommitEvents">resetCommitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetIssuesEnabled">resetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraAuthType">resetJiraAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssuePrefix">resetJiraIssuePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueRegex">resetJiraIssueRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueTransitionAutomatic">resetJiraIssueTransitionAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueTransitionId">resetJiraIssueTransitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetProjectKeys">resetProjectKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetUseInheritedSettings">resetUseInheritedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetCommentOnEventEnabled` <a name="resetCommentOnEventEnabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommentOnEventEnabled"></a>

```typescript
public resetCommentOnEventEnabled(): void
```

##### `resetCommitEvents` <a name="resetCommitEvents" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetCommitEvents"></a>

```typescript
public resetCommitEvents(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuesEnabled` <a name="resetIssuesEnabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetIssuesEnabled"></a>

```typescript
public resetIssuesEnabled(): void
```

##### `resetJiraAuthType` <a name="resetJiraAuthType" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraAuthType"></a>

```typescript
public resetJiraAuthType(): void
```

##### `resetJiraIssuePrefix` <a name="resetJiraIssuePrefix" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssuePrefix"></a>

```typescript
public resetJiraIssuePrefix(): void
```

##### `resetJiraIssueRegex` <a name="resetJiraIssueRegex" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueRegex"></a>

```typescript
public resetJiraIssueRegex(): void
```

##### `resetJiraIssueTransitionAutomatic` <a name="resetJiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueTransitionAutomatic"></a>

```typescript
public resetJiraIssueTransitionAutomatic(): void
```

##### `resetJiraIssueTransitionId` <a name="resetJiraIssueTransitionId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetJiraIssueTransitionId"></a>

```typescript
public resetJiraIssueTransitionId(): void
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetMergeRequestsEvents"></a>

```typescript
public resetMergeRequestsEvents(): void
```

##### `resetProjectKeys` <a name="resetProjectKeys" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetProjectKeys"></a>

```typescript
public resetProjectKeys(): void
```

##### `resetUseInheritedSettings` <a name="resetUseInheritedSettings" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetUseInheritedSettings"></a>

```typescript
public resetUseInheritedSettings(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isConstruct"></a>

```typescript
import { integrationJira } from '@cdktf/provider-gitlab'

integrationJira.IntegrationJira.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformElement"></a>

```typescript
import { integrationJira } from '@cdktf/provider-gitlab'

integrationJira.IntegrationJira.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformResource"></a>

```typescript
import { integrationJira } from '@cdktf/provider-gitlab'

integrationJira.IntegrationJira.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport"></a>

```typescript
import { integrationJira } from '@cdktf/provider-gitlab'

integrationJira.IntegrationJira.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationJira to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabledInput">commentOnEventEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEventsInput">commitEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEnabledInput">issuesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraAuthTypeInput">jiraAuthTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssuePrefixInput">jiraIssuePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueRegexInput">jiraIssueRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionAutomaticInput">jiraIssueTransitionAutomaticInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionIdInput">jiraIssueTransitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKeysInput">projectKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.useInheritedSettingsInput">useInheritedSettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEvents">commitEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraAuthType">jiraAuthType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueRegex">jiraIssueRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKeys">projectKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.useInheritedSettings">useInheritedSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `commentOnEventEnabledInput`<sup>Optional</sup> <a name="commentOnEventEnabledInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabledInput"></a>

```typescript
public readonly commentOnEventEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitEventsInput`<sup>Optional</sup> <a name="commitEventsInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEventsInput"></a>

```typescript
public readonly commitEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuesEnabledInput`<sup>Optional</sup> <a name="issuesEnabledInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEnabledInput"></a>

```typescript
public readonly issuesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraAuthTypeInput`<sup>Optional</sup> <a name="jiraAuthTypeInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraAuthTypeInput"></a>

```typescript
public readonly jiraAuthTypeInput: number;
```

- *Type:* number

---

##### `jiraIssuePrefixInput`<sup>Optional</sup> <a name="jiraIssuePrefixInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssuePrefixInput"></a>

```typescript
public readonly jiraIssuePrefixInput: string;
```

- *Type:* string

---

##### `jiraIssueRegexInput`<sup>Optional</sup> <a name="jiraIssueRegexInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueRegexInput"></a>

```typescript
public readonly jiraIssueRegexInput: string;
```

- *Type:* string

---

##### `jiraIssueTransitionAutomaticInput`<sup>Optional</sup> <a name="jiraIssueTransitionAutomaticInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionAutomaticInput"></a>

```typescript
public readonly jiraIssueTransitionAutomaticInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraIssueTransitionIdInput`<sup>Optional</sup> <a name="jiraIssueTransitionIdInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionIdInput"></a>

```typescript
public readonly jiraIssueTransitionIdInput: string;
```

- *Type:* string

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEventsInput"></a>

```typescript
public readonly mergeRequestsEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `projectKeysInput`<sup>Optional</sup> <a name="projectKeysInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKeysInput"></a>

```typescript
public readonly projectKeysInput: string[];
```

- *Type:* string[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `useInheritedSettingsInput`<sup>Optional</sup> <a name="useInheritedSettingsInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.useInheritedSettingsInput"></a>

```typescript
public readonly useInheritedSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `commentOnEventEnabled`<sup>Required</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commentOnEventEnabled"></a>

```typescript
public readonly commentOnEventEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitEvents`<sup>Required</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.commitEvents"></a>

```typescript
public readonly commitEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraAuthType`<sup>Required</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraAuthType"></a>

```typescript
public readonly jiraAuthType: number;
```

- *Type:* number

---

##### `jiraIssuePrefix`<sup>Required</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssuePrefix"></a>

```typescript
public readonly jiraIssuePrefix: string;
```

- *Type:* string

---

##### `jiraIssueRegex`<sup>Required</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueRegex"></a>

```typescript
public readonly jiraIssueRegex: string;
```

- *Type:* string

---

##### `jiraIssueTransitionAutomatic`<sup>Required</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionAutomatic"></a>

```typescript
public readonly jiraIssueTransitionAutomatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraIssueTransitionId`<sup>Required</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.jiraIssueTransitionId"></a>

```typescript
public readonly jiraIssueTransitionId: string;
```

- *Type:* string

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.mergeRequestsEvents"></a>

```typescript
public readonly mergeRequestsEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectKeys`<sup>Required</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.projectKeys"></a>

```typescript
public readonly projectKeys: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `useInheritedSettings`<sup>Required</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.useInheritedSettings"></a>

```typescript
public readonly useInheritedSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationJira.IntegrationJira.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.Initializer"></a>

```typescript
import { integrationJira } from '@cdktf/provider-gitlab'

const integrationJiraConfig: integrationJira.IntegrationJiraConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.password">password</a></code> | <code>string</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.project">project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.url">url</a></code> | <code>string</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.apiUrl">apiUrl</a></code> | <code>string</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commitEvents">commitEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#id IntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraAuthType">jiraAuthType</a></code> | <code>number</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>string</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueRegex">jiraIssueRegex</a></code> | <code>string</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable automatic issue transitions. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>string</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.projectKeys">projectKeys</a></code> | <code>string[]</code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.useInheritedSettings">useInheritedSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.username">username</a></code> | <code>string</code> | The email or username to be used with Jira. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#password IntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#project IntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#url IntegrationJira#url}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#api_url IntegrationJira#api_url}

---

##### `commentOnEventEnabled`<sup>Optional</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commentOnEventEnabled"></a>

```typescript
public readonly commentOnEventEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#comment_on_event_enabled IntegrationJira#comment_on_event_enabled}

---

##### `commitEvents`<sup>Optional</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.commitEvents"></a>

```typescript
public readonly commitEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#commit_events IntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#id IntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#issues_enabled IntegrationJira#issues_enabled}

---

##### `jiraAuthType`<sup>Optional</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraAuthType"></a>

```typescript
public readonly jiraAuthType: number;
```

- *Type:* number

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#jira_auth_type IntegrationJira#jira_auth_type}

---

##### `jiraIssuePrefix`<sup>Optional</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssuePrefix"></a>

```typescript
public readonly jiraIssuePrefix: string;
```

- *Type:* string

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#jira_issue_prefix IntegrationJira#jira_issue_prefix}

---

##### `jiraIssueRegex`<sup>Optional</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueRegex"></a>

```typescript
public readonly jiraIssueRegex: string;
```

- *Type:* string

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#jira_issue_regex IntegrationJira#jira_issue_regex}

---

##### `jiraIssueTransitionAutomatic`<sup>Optional</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueTransitionAutomatic"></a>

```typescript
public readonly jiraIssueTransitionAutomatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable automatic issue transitions.

Takes precedence over jira_issue_transition_id if enabled. Defaults to false. This value cannot be imported, and will not perform drift detection if changed outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#jira_issue_transition_automatic IntegrationJira#jira_issue_transition_automatic}

---

##### `jiraIssueTransitionId`<sup>Optional</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.jiraIssueTransitionId"></a>

```typescript
public readonly jiraIssueTransitionId: string;
```

- *Type:* string

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#jira_issue_transition_id IntegrationJira#jira_issue_transition_id}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.mergeRequestsEvents"></a>

```typescript
public readonly mergeRequestsEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#merge_requests_events IntegrationJira#merge_requests_events}

---

##### `projectKeys`<sup>Optional</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.projectKeys"></a>

```typescript
public readonly projectKeys: string[];
```

- *Type:* string[]

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#project_keys IntegrationJira#project_keys}

---

##### `useInheritedSettings`<sup>Optional</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.useInheritedSettings"></a>

```typescript
public readonly useInheritedSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#use_inherited_settings IntegrationJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJira.IntegrationJiraConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_jira#username IntegrationJira#username}

---



