# `projectIntegrationEmailsOnPush` Submodule <a name="`projectIntegrationEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationEmailsOnPush <a name="ProjectIntegrationEmailsOnPush" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push gitlab_project_integration_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer"></a>

```typescript
import { projectIntegrationEmailsOnPush } from '@cdktf/provider-gitlab'

new projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush(scope: Construct, id: string, config: ProjectIntegrationEmailsOnPushConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig">ProjectIntegrationEmailsOnPushConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig">ProjectIntegrationEmailsOnPushConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetBranchesToBeNotified">resetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetDisableDiffs">resetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetSendFromCommitterEmail">resetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBranchesToBeNotified` <a name="resetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetBranchesToBeNotified"></a>

```typescript
public resetBranchesToBeNotified(): void
```

##### `resetDisableDiffs` <a name="resetDisableDiffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetDisableDiffs"></a>

```typescript
public resetDisableDiffs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetPushEvents"></a>

```typescript
public resetPushEvents(): void
```

##### `resetSendFromCommitterEmail` <a name="resetSendFromCommitterEmail" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetSendFromCommitterEmail"></a>

```typescript
public resetSendFromCommitterEmail(): void
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetTagPushEvents"></a>

```typescript
public resetTagPushEvents(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct"></a>

```typescript
import { projectIntegrationEmailsOnPush } from '@cdktf/provider-gitlab'

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement"></a>

```typescript
import { projectIntegrationEmailsOnPush } from '@cdktf/provider-gitlab'

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource"></a>

```typescript
import { projectIntegrationEmailsOnPush } from '@cdktf/provider-gitlab'

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport"></a>

```typescript
import { projectIntegrationEmailsOnPush } from '@cdktf/provider-gitlab'

projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationEmailsOnPush to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotifiedInput">branchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffsInput">disableDiffsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEventsInput">pushEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipientsInput">recipientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmailInput">sendFromCommitterEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffs">disableDiffs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEvents">pushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipients">recipients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmail">sendFromCommitterEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEvents">tagPushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `branchesToBeNotifiedInput`<sup>Optional</sup> <a name="branchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```typescript
public readonly branchesToBeNotifiedInput: string;
```

- *Type:* string

---

##### `disableDiffsInput`<sup>Optional</sup> <a name="disableDiffsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffsInput"></a>

```typescript
public readonly disableDiffsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEventsInput"></a>

```typescript
public readonly pushEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string;
```

- *Type:* string

---

##### `sendFromCommitterEmailInput`<sup>Optional</sup> <a name="sendFromCommitterEmailInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```typescript
public readonly sendFromCommitterEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEventsInput"></a>

```typescript
public readonly tagPushEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branchesToBeNotified`<sup>Required</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotified"></a>

```typescript
public readonly branchesToBeNotified: string;
```

- *Type:* string

---

##### `disableDiffs`<sup>Required</sup> <a name="disableDiffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffs"></a>

```typescript
public readonly disableDiffs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEvents"></a>

```typescript
public readonly pushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* string

---

##### `sendFromCommitterEmail`<sup>Required</sup> <a name="sendFromCommitterEmail" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmail"></a>

```typescript
public readonly sendFromCommitterEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEvents"></a>

```typescript
public readonly tagPushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationEmailsOnPushConfig <a name="ProjectIntegrationEmailsOnPushConfig" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.Initializer"></a>

```typescript
import { projectIntegrationEmailsOnPush } from '@cdktf/provider-gitlab'

const projectIntegrationEmailsOnPushConfig: projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.project">project</a></code> | <code>string</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.recipients">recipients</a></code> | <code>string</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.disableDiffs">disableDiffs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.pushEvents">pushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.sendFromCommitterEmail">sendFromCommitterEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#project ProjectIntegrationEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* string

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#recipients ProjectIntegrationEmailsOnPush#recipients}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.branchesToBeNotified"></a>

```typescript
public readonly branchesToBeNotified: string;
```

- *Type:* string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#branches_to_be_notified ProjectIntegrationEmailsOnPush#branches_to_be_notified}

---

##### `disableDiffs`<sup>Optional</sup> <a name="disableDiffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.disableDiffs"></a>

```typescript
public readonly disableDiffs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#disable_diffs ProjectIntegrationEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.pushEvents"></a>

```typescript
public readonly pushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#push_events ProjectIntegrationEmailsOnPush#push_events}

---

##### `sendFromCommitterEmail`<sup>Optional</sup> <a name="sendFromCommitterEmail" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```typescript
public readonly sendFromCommitterEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#send_from_committer_email ProjectIntegrationEmailsOnPush#send_from_committer_email}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.tagPushEvents"></a>

```typescript
public readonly tagPushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_emails_on_push#tag_push_events ProjectIntegrationEmailsOnPush#tag_push_events}

---



